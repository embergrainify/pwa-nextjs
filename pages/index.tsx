
const popUp = async (e: React.MouseEvent<HTMLElement>) => {
  // @ts-ignore
  const [handle] = await window.showOpenFilePicker();
  const file = await handle.getFile();
  const content = await file.text();
  console.log(`content ${content}`);
}

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">
          Hello world!
        </h1>
        <button className="outline outline-offset-2 outline-cyan-500" onClick={popUp}>Button B</button>
      </main>

    </div>
  )
}
