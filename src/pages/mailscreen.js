import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import Mail from '../components/mail'
import MailList from  '../components/mailList'
import MailboxeList from  '../components/mailboxeList'
import LogoutButton from '../components/logout'

const mails = [
				{
					from:"thomas",
					subject:"yo la forme",
					attached:"attached",
					core:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In",
				},
				{
					from:"Hélène",
					subject:"yo la patate",
					attached:"attached",
					core:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In",

				},
]

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
	title:{
		flexGrow: 1,
	},
	appName:{
		margin: theme.spacing(2),
		marginLeft: theme.spacing(9),
	}
	
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
           welcome on Pami's interface 
          </Typography>
	  	<LogoutButton />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar}>
	  		<Typography variant="h5" className={classes.appName}>
	  			PAMI
	  		</Typography>
	  	</div>
        <Divider />
	  	<MailboxeList mailboxes={['Inbox', 'Starred', 'Send email', 'Drafts']}/>
        <Divider />
	  	<MailboxeList mailboxes={['All mail', 'Trash', 'Spam']}/>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      	<MailList mails={mails}/> 	
		<Mail mail={mails[0]}/>
      </main>
    </div>
  );
}

