const fs = require("fs");
const path = require("path");

const generalHelpers = require("../helpers/generalHelpers");

const filePath = "../data/data-source.csv";

const index = async (req, res) => {
    try {
        const parsedData = await generalHelpers.csvToJSON(filePath);
        const cleanedData = generalHelpers.cleanData(parsedData);
        const mappedData = generalHelpers.mapJSONData(cleanedData);
        res.json(mappedData);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
};

const store = async (req, res) => {
    try {
        const tests = req.body;

        if (tests.length === 0) return res.status(400).json({ message: "Invalid data" });

        const filteredTests = tests.filter((test) => test.Indicators.length !== 0);

        await generalHelpers.dataToCSV(filteredTests, filePath);

        const parsedData = await generalHelpers.csvToJSON(filePath);
        const cleanedData = generalHelpers.cleanData(parsedData);
        const mappedData = generalHelpers.mapJSONData(cleanedData);
        res.json(mappedData);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { index, store };
