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
  explanation: "This is a proverb closely associated with language revitalisation, a struggle which is very important in maintaining culture."
  credit: "https://www.maori.cl/Proverbs.htm"
  tags: [ "Uplifting", "Strength", "Guidance/Warning" ]
  `

  return (
    <section className="">
      <h2 className="text-2xl text-gray-800">Documentation</h2>
      <p>This API was created to build provide more Māori-promoting resources. The whakataukī are picked with the goal of education in mind.</p>
      <p>This is an open-source code available on <a href="https://github.com/achoo-o/whakatauki-api">Github</a>.</p>

      <h6>Requests & Endpoint</h6>
      <p>Only GET requests are accepted.</p>
      <p>Endpoint: <a href="https://web-production-20510.up.railway.app/api/v1/whakatauki">https://web-production-20510.up.railway.app/api/v1/whakatauki</a></p>

      <h6>Data Structure</h6>
      <p>The data will return to you in the following format:</p>
      <p>Structure</p>
      <div className="max-w-2xl">
        <pre className="text-base border-2">
          {structure}
        </pre>
      </div>

      <p>Example</p>
      <pre>
      {example}
      </pre>

      <h6>Tags</h6>
      <p>As seen in the example above, there are tags associated with each whakataukī. Each will have a minimum of one tag. 
        This was made so practising developers can sort by specific tags, or create search functions based off of these tags.
      </p>

      <p>Here is a list of the current tags:</p>
      <ul>
        <li>Nature</li>
        <li>Modesty</li>
        <li>Strength</li>
        <li>Leadership</li>
        <li>Birds</li>
        <li>Uplifting</li>
        <li>Teamwork</li>
        <li>Aroha (UNUSED)</li>
        <li>Guidance/Warning</li>
        <li>Whanau</li>
        <li>Motivation</li>
      </ul>

      <h6>CORS Restrictions</h6>
      <p>None.</p>
    </section>
  )
}