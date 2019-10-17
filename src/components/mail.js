import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'


	
function  mail(props){
		return(
			<List>
				<ListItem>
					<Typography variant='h6'> {props.mail.from}</Typography>
				</ListItem>
				<ListItem>
					<Typography variant='h6'> {props.mail.subject}</Typography>
				</ListItem>
				<ListItem>
					<Typography paragraph> {props.mail.core}</Typography>
				</ListItem>
			</List>
		)
	}

export default mail
