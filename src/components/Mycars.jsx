 import React,{Component} from 'react';
 import Cars from './Cars';

 class  Mycars extends Component{
         
        //console.log("pops is" +title);
        state={
                voitures:[
                 {name:'Ford', color:'red',year:2000},
                 {name:'Mercedes', color:'blanc',year:2008},
                 {name:'Bus', color:'blue',year:2018},
                 {name:'Taxi', color:'Jaune',year:2002},
                ],
                titre :'Mon Catalogue 2'
        }
        addTenYears= ()=>{
             const updateState= this.state.voitures.map((param)=>{ return param.year -=10 ;})
               this.setState({
                      updateState
               })
        }
         
        render(){
                const year = new Date().getFullYear();
                return (
                        <div className="myCars">
                                <h1> {this.props.title}</h1>
                                <h1> {this.state.titre}</h1>
                               <button onClick={this.addTenYears} className="but">Add 10 ans</button>
                                {/* <Cars year={year-this.state.voitures[0].year}  color={this.state.voitures[0].color + ' ans'}>{this.state.voitures[0].name}</Cars>
                                <Cars year={year-this.state.voitures[1].year}  color={this.state.voitures[1].color + ' ans'}>{this.state.voitures[1].name}</Cars>
                                <Cars year={year-this.state.voitures[2].year} color={this.state.voitures[2].color + ' ans'}>{this.state.voitures[2].name}</Cars> */}

                                {
                                        this.state.voitures.map((voiture,index)=>{
                                                return ( <div  key={index} >  <Cars children={voiture.name}  color={voiture.color} year={year-voiture.year + ' ans'} /> </div>);
                                        })
                                }
                          
                      </div>
                                   
                         );
        }
 }

 export default Mycars;