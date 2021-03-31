import { useState } from "react";
import { Col, Form } from "react-bootstrap";
const Test = ({ tests }) => {
    const [filterTest, setFilterTest] = useState("");
    const [filterResult, setFilterResult] = useState("");
    const uniqueTestOptions = [...new Set(tests.map((test) => test.Test))];
    const [resultOptions, setResultOptions] = useState([]);

    const [isResultFound, setIsResultFound] = useState(false);
    const [foundResults, setFoundResults] = useState([]);
    const [foundIndicators, setFoundIndicators] = useState([]);

    const handleFilterTestChange = (e) => {
        setFoundIndicators([]);
        setIsResultFound(false);
        setFoundResults([]);
        setFilterResult("");
        const filteredTestResults = tests.filter((test) => test.Test === e.target.value);
        if (filteredTestResults.length > 0) {
            setIsResultFound(true);
            setFoundResults(filteredTestResults);
            const filteredIndicators = [
                ...new Set(filteredTestResults.map((result) => result.Result)),
            ];
            setResultOptions(filteredIndicators);
        }

        setFilterTest(e.target.value);
    };

    const handleFilterResultChange = (e) => {
        const idx = foundResults.findIndex(
            (predicate) => predicate.Test === filterTest && predicate.Result === e.target.value
        );

        if (idx === -1) {
            setFoundIndicators([]);
        } else {
            const indicators = foundResults[idx].Indicators;
            setFoundIndicators(indicators);
        }
        setFilterResult(e.target.value);
    };

    return (
        <Col md={4} className="mt-4">
            <Form.Group>
                <Form.Control as="select" value={filterTest} onChange={handleFilterTestChange}>
                    <option value="">Select a Test</option>
                    {uniqueTestOptions.map((test) => (
                        <option value={test} key={test}>
                            {test}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
            {isResultFound && (
                <Form.Group>
                    <Form.Control
                        as="select"
                        value={filterResult}
                        onChange={handleFilterResultChange}>
                        <option value="">Select a Result</option>
                        {resultOptions &&
                            resultOptions.map((option) => (
                                <option value={option} key={option}>
                                    {option}
                                </option>
                            ))}
                    </Form.Control>
                </Form.Group>
            )}
            {foundIndicators.length > 0 && (
                <Form.Group>
                    <Form.Label className="font-weight-bold">Indicators</Form.Label>
                    {foundIndicators.map((indicator) => (
                        <div key={indicator.Id} className="mt-2 border-bottom">
                            {indicator.Indicator}
                        </div>
                    ))}
                </Form.Group>
            )}
        </Col>
    );
};

export default Test;
