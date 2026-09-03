const SignIn = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">
          Connexion
        </h1>
        <div className="mt-5 w-full max-w-sm">
            <label>Nom d'utilisateur</label>
            <div>
                <input type="text" className="border border-gray-300 rounded px-4 py-2 w-full" />
            </div>
        </div>
        <div className="mt-5 w-full max-w-sm">
            <label>Mot de passe</label>
            <div>
                <input type="password" className="border border-gray-300 rounded px-4 py-2 w-full" />
            </div>
        </div>
        <div className="mt-5 w-full max-w-sm">
            <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
                Se connecter
            </button>
        </div>
        <div>
            <p className="mt-5">
                Pas encore de compte ? <a href="/signUp" className="text-blue-500 hover:underline">S'inscrire</a>
            </p>
        </div>
    </div>
  )
}

export default SignIn