fetch('https://apis.data.go.kr/1613000/KICTopenAPI/itmsh?serviceKey=pfd4dRtU1pToMhVnnHd%2Fc%2Bf1ZzzxJB6LVx4vEo4pDb7mkR03a4x6I59qRDPT2armrzGE9XYZvXV7D8VtSyEsKg%3D%3D&year=2022&dtype=1&output=json&pageNo=1&month=11&numOfRows=60')
.then((response)=> {
    return response.json()
})
.then((datas)=> {
    // console.log(datas)
    const data = datas.traffic

    //상행선 도로(dirUp)
    const dirUp = data.filter((data) => data.direction === 1)
    console.log(dirUp)
    //하행선 도로(dirDown)
    const dirDown = data.filter((data) => data.direction === 2)
    console.log(dirDown)

    // 일별 교통량 비교(상행)
    const dayUp = document.getElementById('dayUp')
    for (let i=1; i<31; i++){
        const day = document.createElement('th')
        day.textContent = `${i}일`
        dayUp.appendChild(day)
    }
    const trafficUp = document.getElementById('trafficUp')
    for (let i=0; i<30; i++){
        const traffic = document.createElement('td')
        traffic.textContent = dirUp[i].total_count
        trafficUp.appendChild(traffic)
    }

    // 일별 교통량 비교(하행)
    const dayDown = document.getElementById('dayDown')
    for (let i=1; i<31; i++){
        const day = document.createElement('th')
        day.textContent = `${i}일`
        dayDown.appendChild(day)
    }
    const trafficDown = document.getElementById('trafficDown')
    for (let i=0; i<30; i++){
        const traffic = document.createElement('td')
        traffic.textContent = dirDown[i].total_count
        trafficDown.appendChild(traffic)
    }
    
    // 시간대별 평균 교통량 비교(상행)(timeTrafficUp)
    let timeTrafficUp = []
    for(let i=1; i<25; i++){
        let sum = 0
        let key = `time_type${i}`
        for (let j of dirUp){
            sum += j[key]
        }
        timeTrafficUp.push(sum)
    }
    console.log(timeTrafficUp)

    const timeTableUp = document.getElementById('timeTableUp')
    for (let i=0; i<25; i++){
        const time = document.createElement('td')
        time.textContent = timeTrafficUp[i]
        timeTableUp.appendChild(time)
    }

    // 시간대별 평균 교통량 비교(하행)(timeTrafficDown)
    let timeTrafficDown = []
    for(let i=1; i<25; i++){
        let sum = 0
        let key = `time_type${i}`
        for (let j of dirDown){
            sum += j[key]
        }
        timeTrafficDown.push(sum)
    }
    console.log(timeTrafficDown)

    const timeTableDown = document.getElementById('timeTableDown')
    for (let i=0; i<25; i++){
        const time = document.createElement('td')
        time.textContent = timeTrafficDown[i]
        timeTableDown.appendChild(time)
    }

    function upDay(){
        alert(document.getElementById('test'))
        // test.style.display='block';
    }
    
    // const days = []
    // for (let i=1; i<31; i++){
    //     let day = `${i}일`
    //     days.push(day)
    // }
    // console.log(days)
    // const timeCvsUp = document.getElementById('timeCvsUp').getContext('2d')
    // const timeChartUp = new Chart(timeCvsUp, {
    //     type: 'line',
    //     data: {
    //         labels: days,
    //         datasets: {
    //             label: 'dayUp Dataset',
    //             data: timeTrafficUp,
    //             backgroundColor: 'rgba(75, 192, 192, 0.2)',
    //             borderColor: 'rgba(75, 192, 192, 1)',
    //             borderWidth: 1
    //         }
    //     }
    // })

})