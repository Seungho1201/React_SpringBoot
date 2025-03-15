import './App.css'

import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
    const [hello, setHello] = useState('')
    const [test, testSet] = useState('');
    const [test2, testSet2] = useState('');

    const [testList, setTestList] = useState([]);  // 초기 상태를 빈 배열로 설정



    useEffect(() => {
        axios.get("/api/hello")  // 프록시를 통해 백엔드로 요청
            .then((response) => {
                setHello(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    useEffect(() => {
        console.log(hello);  // hello가 업데이트될 때마다 출력
    }, [hello]);  // hello 상태가 변경될 때마다 실행

    return (
        <>
            <div>
                <h1>백엔드에서 가져온 데이터 : {hello}</h1>
            </div>


            <button onClick={()=>{
                axios.get("/api/test")  // 프록시를 통해 백엔드로 요청
                    .then((response) => {
                        testSet(response.data);
                    })
                    .catch((error) => {
                        console.error("Error fetching data:", error);
                    });
            }}> 버튼</button>

            <button onClick={()=>{
                testSet(null);
                testSet2(null);
                setTestList([]);
            }}> 초기화</button>

            {
                test == null ? <h3>데이터 없음</h3> : <h3>데이터 잇음</h3>
            }

            <h1>{test}</h1>


            <button onClick={()=>{
                axios.get("/api/test3")  // 프록시를 통해 백엔드로 요청
                    .then((response) => {
                        setTestList(response.data); // 상태 업데이트
                       console.log(response.data);
                    })
                    .catch((error) => {
                        console.error("Error fetching data:", error);
                    });
            }}> 버튼</button>

            <h1>{test2}</h1>

            {testList.map((item, index) => (
                <li key={item.id}>
                    {index + 1}. {item.name} ({item.age}세)
                </li>
            ))}



        </>

    );
}

export default App
