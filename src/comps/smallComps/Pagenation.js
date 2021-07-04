import React,{useReducer,useState} from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
function Pagenation(props) {

    function reducer(state,action) {

    }
    const [state,dispatch]=useReducer(reducer ,{
        test:[{
            id:1,
            text:'llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll',
            a:'lorem1',
            b:'lorem2',
            c:'lorem3',
            d:'lorem4',
        },
            {
                id:2,
                text:'llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll',
                a:'lorem2',
                b:'lorem3',
                c:'lorem4',
                d:'lorem5',
            }
            ,
            {
                id:2,
                text:'llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll',
                a:'lorem2',
                b:'lorem3',
                c:'lorem4',
                d:'lorem5',
            }
            ,
            {
                id:2,
                text:'llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll',
                a:'lorem2',
                b:'lorem3',
                c:'lorem4',
                d:'lorem5',
            },
            {
                id:3,
                text:'llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll',
                a:'lorem3',
                b:'lorem4',
                c:'lorem5',
                d:'lorem6',
            },
            {
                id:1,
                text:'llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll',
                a:'kfgfnjfnj',
                b:'lorem2',
                c:'lorem3',
                d:'lorem4',
            },
        ]

    });
    const [person ,setPerson]=useState({})
  const [value,setValue]=useState(1)
 function add() {
     if (state.test.id=value){
     setPerson(state.test)
     }
 }

    return (
        <div>
            <div className="container">
               <div className="row mt-2">
                       {
                          state.test.map((item,index)=>(

                               <div className="col-md-3 mt-5">

                               <div key={item.id} className="card">
                                   <div className="card-header">
                                       {item.text}
                                   </div>
                                   <div className="card-body">
                                       {item.a}
                                       {item.b}
                                       {item.c}
                                       {item.d}
                                   </div>
                               </div>

                               </div>
                           ))
                       }

               </div>
            </div>
        </div>
    );
}

export default Pagenation;