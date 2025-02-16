import * as xlsx from "xlsx";

const excelToJson = async (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                resolve(json); // Return the parsed JSON

            } catch (error) {
                reject(error); // Handle errors during processing
            }
        };

        reader.onerror = () => {
            reject(new Error("Failed to read the file"));
        };

        reader.readAsArrayBuffer(file); // Use the provided file
    });
};

export default excelToJson;