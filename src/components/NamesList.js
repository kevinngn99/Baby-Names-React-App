import React, {Component} from 'react'

class NamesList extends Component {
    render() {
        const {data, filterText, addFavourite} = this.props;
        const namesList = data
        .filter(name => {
            return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
        })
        .map(name => {
          return (
            <li 
                key={name.id} 
                className={name.sex}
                onClick={() => addFavourite(name.id)}
            >
            {name.name}
            </li>
          )
        });
    
        return (
            <div>
                <ui>
                    {namesList}
                </ui>
            </div>
        );
    }
}

export default NamesList;