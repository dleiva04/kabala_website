import React from 'react';
import Link from 'next/link';

export default class Index extends React.Component {

	state = {
		hide: 'hidden',
		nav: '',
		edgeY: '0',
		outerH: '0'
	}

	handleScroll = () => {
		if (window.pageYOffset - 100 > this.state.edgeY) {
			this.setState({
				edgeY: window.pageYOffset,
				outerH: window.outerHeight,
				nav: 'hidden'
			});
		} else if (window.pageYOffset < this.state.edgeY) {
			this.setState({
				edgeY: window.pageYOffset,
				outerH: window.outerHeight,
				nav: ''
			});
		}
		// console.log(this.state.edgeY);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
		console.log(window.PageTransitionEvent);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
		console.log(window.PageTransitionEvent);
	}


	show = () => {
		if (this.state.hide == 'hidden') {
			this.setState({ hide: '' });
		} else {
			this.setState({ hide: 'hidden' });
		}
		console.log(this.state.hide);
	}


	render() {
		return (
			<React.Fragment>
				<section className={`menu z-10 fixed w-full ${this.state.hide}`}>
					<div className="top absolute right-0 px-16 flex items-center justify-end">
						<img src="/exit.svg" alt="menu" className="h-10" onClick={this.show} />
					</div>
					<div className=" flex items-center justify-center">
						<div className="bg2 w-2/4 flex items-center justify-center ">
							<img src="/kabala.svg" alt="" className="h-24" />
						</div>
						<div className="w-2/4 flex items-center justify-center flex-col text-white ">
							<li>
								<Link href="#">
									<a>Qué hacemos</a>
								</Link>
							</li>
							<li>
								<Link href="#">
									<a>Equipo</a>
								</Link>
							</li>
							<li>
								<Link href="#">
									<a>Lorem</a>
								</Link>
							</li>
							<li>
								<Link href="#">
									<a>Contacto</a>
								</Link>
							</li>
						</div>
					</div>
				</section>
				<section className="carousel relative z-0">
					<nav className={`nav ${this.state.edgeY < this.state.outerH  ? 'blur' : 'noBlur'} flex items-center justify-between px-16 z-10 ${this.state.nav}`}>
						<img src="/kabala.svg" alt="Kábala" />
						<img src="/menu.svg" alt="menu" className="h-10 z-20" onClick={this.show} />
					</nav>
					<div className="bg-black h-24 w-24 absolute bottom-0 right-0 m-12 rounded-full flex items-center justify-center hover:bg-white z-0">
						<img src="/img1.png" className="h-20 w-20 rounded-full object-cover" alt="" />
					</div>
				</section>
				<section className="brands flex justify-around items-center">
					<img src="/logo1.png" alt="" />
					<img src="/logo2.png" alt="" />
					<img src="/logo3.png" alt="" />
				</section>
				<section className="section1 w-full flex justify-start items-center">
					<img src="/phone1.png" alt="" className="phone"/>
					<h2 className="text-white txt">Explora <b>todo</b> lo que el turismo<br/><b>te ofrece</b></h2>
				</section>
				<section className="test"></section>
			</React.Fragment>
		);
	}
}
