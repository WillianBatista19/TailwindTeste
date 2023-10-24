function App() {
  return (
      <div className="container h-screen w-screen mx-auto flex items-center justify-center">
        <div className="flex flex-col bg-gray-700 shadow-lg shadow-gray-800 py-4 px-6 mx-4 rounded-md">

          <div className="flex flex-row items-center">
            <img 
            className="w-24 rounded-full"
            alt="User Avatar"
            src="https://avatars.githubusercontent.com/u/72418226?v=4" />

            <div className="ml-4">
              <h3 className="font-semibold text-xl">Willian Batista</h3>
              <h4 className="text-indigo-300 pt-1">Front-End Developer</h4>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="font-semibold text-2xl mb-2">Bio</h2>
            <p className="text-gray-300 font-light mt-1 max-w-lg text-justify">
              Olá! Sou um desenvolvedor front-end com conhecimentos em JavaScript, HTML 5, CSS3 e React. Atualmente, estou cursando o 7º semestre de Sistemas de Informação, o que me proporcionou uma base sólida em programação.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="font-semibold text-2xl mb-2">Skills</h2>

            <div className="mt-4">
              <h3 className="text-yellow-500 font-medium">
                Front-End
              </h3>

              <ul className="list-disc list-inside pl-4">
                  <li className="list-item">HTML5 & CSS3</li>
                  <li className="list-item">Javascript</li>
                  <li className="list-item">React</li>
                </ul>
            </div>

            <div className="mt-4">
              <h3 className="text-yellow-500 font-medium">
                Additional
              </h3>
              
              <ul className="list-disc list-inside pl-4">
                  <li className="list-item">MongoDB</li>
                  <li className="list-item">MySQL</li>
                  <li className="list-item">Git & GitHub</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App
