import React from 'react'
import AllMoviesData from './98-data.json'
import Menu1 from './Menus/Menu1'  //<Menu1/>
import Menu2 from './Menus/Menu2'  // <Menu2/>
import * as UCR from './97-LS'

export default class extends React.Component{
    render(){
        console.clear()
        let logTes = UCR.get('Ucre')
        console.log(logTes)
        return(
            <div>
                {/* <Menu1/> */}
                { logTes.name ? <Menu2/> : <Menu1/> }

                <h1>This Week movies</h1>

                <div className="all-movies-cont">
                    { AllMoviesData.map((movie) => { return <Movie key={movie.name} info={movie} /> }) }
                </div>
            </div>
        )
    }
}


class Movie extends React.Component{
    render(){
        return(
            <div className="Movie-Profile">
                <div className="movie-pic-cont">
                    <img className="movie-pic" src={this.props.info.pic} alt="Product"/>
                </div>
                <div className="info-text-cont">
                    <div><strong>Name: </strong>{ this.props.info.name }</div>
                    <div><strong>Year: </strong>{ this.props.info.year }</div>
                    <div><strong>Desc: </strong>{ this.props.info.desc }</div>
                </div>
            </div>
        )
    }
}


