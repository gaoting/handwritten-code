async function* chars() {
  const decodedText = "foo";
  for (let char of decodedText) {
    yield await new Promise((resolve) => setTimeout(resolve, 1000, char));
  }
}
const decodedTextStream = new ReadableStream({
  async start(controller) {
    for await (let chunk of chars()) {
      controller.enqueue(chunk);
    }
    controller.close();
  },
});
const encodedTextStream = decodedTextStream.pipeThrough(newTextEncoderStream());
const readableStreamDefaultReader = encodedTextStream.getReader();
(async function () {
  while (true) {
    const { done, value } = await readableStreamDefaultReader.read();
    if (done) {
      break;
    } else {
      console.log(value);
    }
  }
})();
//Uint8Array[102]
//Uint8Array[111]
//Uint8Array[111]
