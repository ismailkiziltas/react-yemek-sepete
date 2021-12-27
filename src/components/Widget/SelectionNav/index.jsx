// React
import { memo, useState } from "react";

// React ComboBox
import ComboBox from 'react-responsive-combo-box';

// Data
import LocationData from '../../../__mocks__/LocationData';


const SelectionNav = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [highlightedOption, setHighlightedOption] = useState("");

    return (
        <div className="flex items-center justify-center">
            <ComboBox
                options={LocationData}
                placeholder={LocationData[0]}
                defaultIndex={4}
                optionsListMaxHeight={300}
                className="text-dark-700 bg-white rounded-lg font-bold w-full"
                renderOptions={(option) => (
                    <div className="comboBoxOption text-dark-700">{option}</div>
                )}
                onSelect={(option) => setSelectedOption(option)}
                enableAutocomplete
                onOptionsChange={(option) => setHighlightedOption(option)}
            />
        </div>

    );
}

export default memo(SelectionNav)