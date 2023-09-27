import SelectTeacher from "react-native-vt";

const VirtualTeacher = SelectTeacher({
  apiKey: "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",
  age: 7
});

(async () => {
  try {
    const res = await VirtualTeacher.ask(
      "Hi, How many letters are there in English Alphabet?"
    );
    console.log(`>> Success Response: ${res}`);
  } catch (error) {
    console.log(`>> Error: ${error}`);
  }
})();
