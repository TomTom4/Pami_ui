import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


class MailList extends React.Component{

	constructor(props){
		super(props)
	}

	generate(){
		const mails = this.props.mails
		return mails.map((mail) =>
			<ListItem button key="mail">
				<ListItemText primary={mail.from}/>
				<ListItemText primary={mail.subject}/>
				<ListItemText primary={mail.attached}/>
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

export default MailList
