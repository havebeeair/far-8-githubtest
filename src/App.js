import React from 'react'
import './App.css'
import JavierRivera from './javier-rivera/JavierRivera'
import AlfredoZimperz from './alfredo-zimperz/AlfredoZimperz'
import Dashboard from './Dashboard'
import { Route } from 'react-router-dom'

function App() {
	return (
		<div className="grid">
			<div>
				<Route exact path="/far-8-githubtest" component={Dashboard} />
				<Route path="/alfredo-zimperz" component={AlfredoZimperz} />
				{/* 
        <Route path="/benjamin-cifre" component={BenjaminCifre} />
        <Route path="/daniel-nicolaevsky" component={DanielNicolaevsky} />
        <Route path="/danitza-bonilla" component={DanitzaBonilla} />
        <Route path="/diego-fried" component={DiegoFried} />
        <Route path="/esteban-raffo" component={EstebanRaffo} />
        <Route path="/felipe-perarnau" component={FelipePerarnau} />
        <Route path="/gustavo-velasquez" component={GustavoVelasquez} />
        <Route path="/javier-izquierdo" component={JavierIzquierdo} />
        <Route path="/jorge-elias" component={JorgeElias} />
        <Route path="/jorge-fernandez" component={JorgeFernandez} />
        <Route path="/juan-herrera" component={JuanHerrera} />
        <Route path="/nancy-pompei" component={NancyPompei} /> */}
				<Route path="/javier-rivera" component={JavierRivera} />
			</div>
		</div>
	)
}

export default App
