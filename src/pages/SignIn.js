import React from 'react'
import styled from 'styled-components/macro'
import pink from '../images/pink.svg'
import { firestore, signInWithGoogle } from '../firebase'


export default function SignIn(){
function handleGoogleClick(event){
event.preventDefault()
signInWithGoogle()
}
    return <div><form>
        <input type='email'placeholder= 'E-Mail' ></input>
        <input type='password'placeholder='Passwort'></input>
        <button >Einloggen</button>
        <button onClick={handleGoogleClick}>Einloggen mit Google</button>
         </form>
    </div>
}
