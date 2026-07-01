// ==============================
// SOLAR FLARE DASHBOARD
// script.js
// ==============================

// Upload Button
document.getElementById("uploadBtn").addEventListener("click", () => {

    const file = document.getElementById("csvFile").files[0];

    if(file){

        alert(file.name + " uploaded successfully.");

    }else{

        alert("Please select a CSV file.");

    }

});


// Possible Prediction States

const flareStates = [

    {
        flare:"C-Class",
        probability:45,
        risk:"LOW",
        temp:"6.8 MK"
    },

    {
        flare:"M-Class",
        probability:78,
        risk:"MEDIUM",
        temp:"12.5 MK"
    },

    {
        flare:"X-Class",
        probability:95,
        risk:"HIGH",
        temp:"18.9 MK"
    }

];


// Create Chart

const ctx = document.getElementById("flareChart").getContext("2d");

let flareChart = new Chart(ctx,{

    type:"line",

    data:{

        labels:["0","5","10","15","20","25","30"],

        datasets:[{

            label:"Solar Flare Probability",

            data:[25,35,40,50,60,72,80],

            borderColor:"#ff9800",

            backgroundColor:"rgba(255,152,0,0.15)",

            borderWidth:3,

            fill:true,

            tension:0.4

        }]

    },

    options:{

        responsive:true,

        plugins:{

            legend:{

                labels:{

                    color:"white"

                }

            }

        },

        scales:{

            x:{

                ticks:{color:"white"}

            },

            y:{

                beginAtZero:true,

                max:100,

                ticks:{color:"white"}

            }

        }

    }

});


// Prediction Button

document.getElementById("predictBtn").addEventListener("click",()=>{

    // Simulated Markov Transition

    const state = flareStates[Math.floor(Math.random()*flareStates.length)];

    document.getElementById("flareClass").innerHTML = state.flare;

    document.getElementById("probability").innerHTML = state.probability + "%";

    document.getElementById("temp").innerHTML = state.temp;

    document.getElementById("time").innerHTML =
        (Math.floor(Math.random()*20)+5) + " Minutes";



    // Risk Badge

    let riskHTML="";

    if(state.risk==="HIGH"){

        riskHTML='<span class="high">HIGH</span>';

    }

    else if(state.risk==="MEDIUM"){

        riskHTML='<span class="medium">MEDIUM</span>';

    }

    else{

        riskHTML='<span class="low">LOW</span>';

    }



    document.querySelector(".result p:nth-child(4) span").outerHTML = riskHTML;



    // Generate Graph Data

    let graph=[];

    let value=20;

    for(let i=0;i<7;i++){

        value += Math.floor(Math.random()*20);

        if(value>100) value=100;

        graph.push(value);

    }



    flareChart.data.datasets[0].data = graph;

    flareChart.update();



    // Update Activity Log

    const activity = document.querySelector("ul");

    const currentTime = new Date().toLocaleTimeString();

    const newItem = document.createElement("li");

    newItem.innerHTML =
        currentTime +
        " - Prediction Updated (" +
        state.flare +
        ")";



    activity.prepend(newItem);



    if(activity.children.length>6){

        activity.removeChild(activity.lastElementChild);

    }

});
