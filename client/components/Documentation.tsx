export default function Documentation() {
  const structure =
  `
  id: number
  text: string
  translationEng: string
  explanation?: string    //may return null if no expl. provided
  credit: string
  tags: string[]          //minimum 1 string in array
  `
  const example =
  `
  id: 38
  text: "Ko taku reo taku ohooho, ko taku reo taku mapihi mauria."
  translationEng: "My language is my awakening, my language is the window to my soul."
  explanation: "This is a proverb closely associated with language revitalisation, 
    a struggle which is very important in maintaining culture."
  credit: "https://www.maori.cl/Proverbs.htm"
  tags: [ "Uplifting", "Strength", "Guidance/Warning" ]
  `

  return (
    <div className="p-10">
      <h1 className="text-4xl text-gray-950 mb-1">Whakataukī API</h1>
      <div className="ml-1">
        <h2 className="text-2xl text-blue-800">Documentation</h2>
        <div className="my-5 h-0.5 w-full bg-gray-300"></div>
        <p>This API was created to build provide more Māori-promoting resources. The whakataukī are picked with the goal of education in mind.</p>
        <p>This is an open-source code available on <a href="https://github.com/achoo-o/whakatauki-api">Github</a>.</p>

        <h3 id="endpoint" className="mt-5 mb-2 text-xl text-blue-800 text-opacity-90">Requests & Endpoint</h3>
        <p>Only GET requests are accepted.</p>
        <p className="font-semibold">Endpoint: <a 
        className="text-blue-800"
        href="https://whakatauki-api.up.railway.app/api/v1/whakatauki">https://whakatauki-api.up.railway.app/api/v1/whakatauki</a></p>

        <h3 id="data" className="mt-5 mb-2 text-xl text-blue-800 text-opacity-90">Data Structure</h3>
        <p>The data will return to you as an array of objects in the following format:</p>
        <h4 className="font-semibold mt-5 mb-2 text-gray-900">Structure</h4>
        <pre className="text-white max-w-2xl text-base border-2 bg-black bg-opacity-90 overflow-auto">
          {structure}
        </pre>
        <h4 className="font-semibold mt-5 mb-2 text-gray-900">Object Example</h4>
        <pre className="text-white max-w-4xl text-base border-2 bg-black bg-opacity-90 overflow-auto">
          {example}
        </pre>

        <h3 id="tags" className="mt-5 mb-2 text-xl text-blue-800 text-opacity-90">Tags</h3>
        <p>As seen in the example above, there are tags associated with each whakataukī. Each will have a minimum of one tag. 
          This was made so practising developers can sort by specific tags, or create search functions based off of these tags.
        </p>

        <p>Here is a list of the current tags:</p>
        <ul className="flex flex-wrap max-w-4xl gap-5 align-top my-10 pl-6 font-medium">
          <li className="p-2 border-2 border-white rounded-lg bg-gray-200">Nature</li>
          <li className="p-2 border-2 border-white rounded-lg bg-gray-200">Modesty</li>
          <li className="p-2 border-2 border-white rounded-lg bg-gray-200">Strength</li>
          <li className="p-2 border-2 border-white rounded-lg bg-gray-200">Leadership</li>
          <li className="p-2 border-2 border-white rounded-lg bg-gray-200">Birds</li>
          <li className="p-2 border-2 border-white rounded-lg bg-gray-200">Uplifting</li>
          <li className="p-2 border-2 border-white rounded-lg bg-gray-200">Teamwork</li>
          <li className="p-2 border-2 border-white rounded-lg bg-gray-200">Aroha (UNUSED)</li>
          <li className="p-2 border-2 border-white rounded-lg bg-gray-200">Guidance/Warning</li>
          <li className="p-2 border-2 border-white rounded-lg bg-gray-200">Whanau</li>
          <li className="p-2 border-2 border-white rounded-lg bg-gray-200">Motivation</li>
        </ul>

        <h3 id="cors" className="mt-5 mb-2 text-xl text-blue-800 text-opacity-90">CORS Restrictions</h3>
        <p>None.</p>
      </div>
    </div>
  )
}