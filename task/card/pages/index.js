import Head from 'next/head'
import Image from 'next/image'
import Card from '../component/card';
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Home = () => {

  const [Alldata, setAlldata] = useState({ Card_info: null });
  const [Carddata, setCarddata] = useState(null);
  useEffect(() => {
    const getStaticProps = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((respons) => {
          setCarddata(respons.data);

        }).catch((err) => {
          setCarddata({});
        })
      setAlldata({ Card_info: res?.data });

    }
    getStaticProps();
  }, [])
  if (Alldata.Card_info) {
    console.log('data--->', Alldata.Card_info)
  }
  console.log(Carddata);
  // const vari = Carddata.map(data => {
  //   console.log(Carddata);
  //   return (

  //     <Card card_details={data} key={data.id} />

  //   )
  // });

  return (
    <div className={styles.container}>
      {/* {vari} */}
    </div>
  )
}

export default Home;