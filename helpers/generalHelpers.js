const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");

const csvToJSON = async function (filePath) {
    const promise = new Promise((resolve, reject) => {
        const dataArray = [];
        fs.createReadStream(path.join(__dirname, filePath))
            .pipe(csv())
            .on("data", (data) => dataArray.push(data))
            .on("end", () => {
                console.log(`Parsing complete at ${new Date().toLocaleString()}`);
                resolve(dataArray);
            })
            .on("error", (err) => {
                reject(err);
            });
    });
    return promise;
};

const dataToCSV = async function (data, filePath) {
    const promise = new Promise((resolve, reject) => {
        const wStream = fs.createWriteStream(path.join(__dirname, filePath));
        wStream.on("close", () => resolve(true));
        wStream.on("error", (err) => reject(err));
        wStream.write("Test,Result,Indicator\n");

        data.forEach((test) =>
            test.Indicators.map((indicator) => {
                const sanitizedIndicator = indicator.Indicator.includes(",")
                    ? `"${indicator.Indicator}"`
                    : indicator.Indicator;
                const data = `${test.Test},${test.Result},${sanitizedIndicator}\n`;
                wStream.write(data);
            })
        );
        wStream.end();

    });
    return promise;
};

const cleanData = function (data) {
    const cleanedData = data
        .filter((result) => Object.values(result).some((x) => x !== ""))
        .map((item) => ({
            Test: item.Test,
            Result: item.Result,
            Indicator: item.Indicator,
        }));

    return cleanedData;
};

const mapJSONData = function (data) {
    const mappedData = data.reduce((accumulator, current) => {
        const idx = accumulator.findIndex(
            (item) => item.Test === current.Test && item.Result === current.Result
        );
        if (idx === -1) {
            accumulator.push({
                Id: v4(),
                Test: current.Test,
                Result: current.Result,
                Indicators: [{ Id: v4(), Indicator: current.Indicator }],
            });
            return accumulator;
        }
        accumulator[idx].Indicators.push({ Id: v4(), Indicator: current.Indicator });
        return accumulator;
    }, []);
    return mappedData;
};

module.exports = { csvToJSON, cleanData, mapJSONData, dataToCSV };
