
const showFilePicker = async (e: React.MouseEvent<HTMLElement>) => {
  const el = document.getElementById("fileId") as HTMLInputElement;
  el.onchange = (ev) => {
    const target = ev.target as HTMLInputElement;
    const files = target.files;

    // files?.item(0)?.arrayBuffer()
    // .then((buff) => {
    //   console.log(new TextDecoder().decode(buff));
    // });

    files?.item(0)?.text()
      .then((res) => {
        console.log(res);
      });
  }

  el.click();
}
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API
// https://developer.mozilla.org/en-US/docs/Web/Manifest/share_target
const share = async () => {
  const shareData = {
    title: 'MDN',
    text: 'Learn web development on MDN!',
    url: 'https://developer.mozilla.org'
  }

  try {
    await navigator.share(shareData)
    console.log('MDN shared successfully');
  } catch (err) {
    console.log(`Error: ${err}`);
  }

}

// Chrome Only functions
const showFilePickerChrome = async (e: React.MouseEvent<HTMLElement>) => {
  try {
    // @ts-ignore
    const [handle] = await window.showOpenFilePicker();
    const file = await handle.getFile();
    const content = await file.text();
    console.log(`content ${content}`);
  } catch(err) {
    console.log(`Error: ${err}`);
  }
}

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center">
        <div className="w-full flex flex-col space-y-4 px-16 py-8 items-start">
          <p className="text-3xl font-bold text-gray-700">*</p>

          <div>
            <button className="rounded-lg p-2 bg-cyan-500 text-white hover:bg-cyan-300 hover:text-gray-700" onClick={showFilePicker}>showOpenFilePicker</button>
            <input id="fileId" className="hidden" type="file" />
          </div>

          <button className="rounded-lg p-2 bg-cyan-500 text-white hover:bg-cyan-300 hover:text-gray-700" onClick={share}>share</button>

        </div>

        <div className="bg-green-500 w-full px-16 py-8">
          <p className="text-3xl font-bold text-gray-700 pb-2">Chrome Only</p>
          <button className="rounded-lg p-2 bg-cyan-500 text-white hover:bg-cyan-300 hover:text-gray-700" onClick={showFilePickerChrome}>showOpenFilePicker</button>
        </div>
      </main>

    </div>
  )
}
