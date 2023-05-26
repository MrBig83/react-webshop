

function LoginForm() {

  const login = async() => {
    const res = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email: "admin@admin.se", password: "admin"} )
    })

    const data = await res.json()
    console.log(data)
    
    }
    return (
      <div>
      <button onClick={login}>Logga in</button>
       
    </div>
  )
}


export default LoginForm