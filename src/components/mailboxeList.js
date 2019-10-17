import React from 'react'
import List from '@material-ui/core/List' 
import ListItem from '@material-ui/core/ListItem' 
import ListItemText from '@material-ui/core/ListItemText' 
import ListItemIcon from '@material-ui/core/ListItemIcon';

class MailboxeList extends React.Component{

	constructor(props){
		super(props)
	}

	generate(){
		return this.props.mailboxes.map((mailboxe)=>
			<ListItem button key={mailboxe}>
				<ListItemText primary={mailboxe}/>
			</ListItem>
		)
	}

	render(){
		return(
			<List>
				{this.generate()}
			</List>
		)
	}

}
export default MailboxeList
