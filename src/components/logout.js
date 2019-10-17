import React from 'react'
import Button from '@material-ui/core/Button'
import {useHistory} from 'react-router-dom'

function LogoutButton(){
	let history = useHistory()
	return(
		<Button  color="inherit" onClick={() => {
			history.push("/login")
		}}>
			log out
		</Button>
	)
}

export default LogoutButton
