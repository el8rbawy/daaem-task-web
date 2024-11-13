'use client';
import React from 'react';
import { Main } from "./style/styled";
import { db, ref, onValue, remove } from "../services/firebase";

export default function Home() {
   const [data, setData] = React.useState<{ id: string, name: string, numberId: string, pictureUri: string }[]>([]);

   // Realtime Data
   React.useEffect(() => {
      const unsubscribe = onValue(ref(db), (snapshot) => {
         if (snapshot.exists()) {
            const items = [];
            for (const key in snapshot.val()) items.push({ ...snapshot.val()[key], id: key });
            setData(items.reverse());
         }
      });
      return () => unsubscribe();
   }, []);

   // ---
   const handleDelete = async (id: string) => {
      const itemRef = ref(db, id);
      await remove(itemRef);
   }

   return (
      <Main>
         <div className="container">{
            data.map(item => (
               <div key={ item.id } className="item">
                  <div className="flex">
                     <div className="picture">
                        { item.pictureUri ? <img src={ item.pictureUri } alt="picture" /> : null }
                     </div>
                     <div className="info">
                        <h3>{ item.name }</h3>
                        <span>{ item.numberId }</span>
                     </div>
                  </div>
                  <button onClick={ _=> handleDelete(item.id) }>Delete</button>
               </div>
            ))   
         }</div>
      </Main>
   );
}