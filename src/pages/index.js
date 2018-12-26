import React from "react"
import '../index.css'
import logo from './logo.svg'

export default () => (
	<div style={{ color: `purple` }}>
		<div className='zone green navbar'>
			<div style={{display: 'inline-block'}}>
				<img height='100' width='100' id='logo' src={logo} />
			</div>
			<div className='push'>
				<nav className='main-nav '>				
					<li ><a href=''>About</a></li>
					<li ><a href=''>Experience</a></li>
					<li ><a href=''>Work</a></li>
					<li ><a href=''>Contact</a></li>
				</nav>
			</div>
		</div>
		<div className='zone red'>Cover</div>
		<div className='zone blue'>Project</div>
		<div className='zone yellow'>Footer</div>
  	</div>
)

