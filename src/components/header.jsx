import React, { Component } from 'react';

class Header extends Component {
    state = { 
      menu : [
        {title : "Buy", id : 1}, 
        {title : "About Us", id : 2}, 
        {title : "Roadmap", id : 3},
        {title : "Collection", id : 4}, 
        {title : "FAQ", id : 5},
        {title : "Shroom Scouts", id : 6},
        {title : "Leaderboard", id : 7},
        {title : "Rarity", id : 8}
      ]
     } ;
    render() { 
        return (
            <div>
            <div className="header bg-black h-[80px] flex justify-between items-center">
              <div className="text-white flex gap-6 ml-5">
               {this.state.menu.map(item => <div key={item.id}>{item.title}</div>)}
              </div>
              <div className="bg-blue-700 px-8 rounded-xl py-4 m-5 ">
                <button className="font-semibold text-white">Buy Now</button>
              </div>
            </div>
          </div>
        );
    }
}
 
export default Header;