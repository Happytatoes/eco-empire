var day = 0;
var factories = 16;
var pollution = 100;
var money = 0;
var mfactor = 16;
var pfactor = 16;

var energy = 16;

var wage = 10;
var workersat = 75;

var price = 10;
var customersat = 75;


//mfactor = (energy * price * customersat) - (wage * factories)

var f11 = 1; var f12 = 1; var f13 = 1; var f14 = 1;
var f21 = 1; var f22 = 1; var f23 = 1; var f24 = 1;
var f31 = 1; var f32 = 1; var f33 = 1; var f34 = 1;
var f41 = 1; var f42 = 1; var f43 = 1; var f44 = 1;

document.getElementById("money").innerHTML = money;
document.getElementById("pollution").innerHTML = pollution;

function hideadd() {
    document.getElementById("addwind").style.display = "none";
    document.getElementById("addsolar").style.display = "none";
    document.getElementById("adddam").style.display = "none";
    document.getElementById("addbio").style.display = "none";
    document.getElementById("add").style.display = "none";
    document.getElementById("generate").style.display = "block";
    document.getElementById("displyid").style.display = "block";
    document.getElementById("moneyword").style.display = "block";
    document.getElementById("money").style.display = "block";
    document.getElementById("pollutionword").style.display = "block";
    document.getElementById("pollution").style.display = "block";
    document.getElementById("energy").style.display = "block";
    document.getElementById("energyword").style.display = "block";
    document.getElementById("day").style.display = "block";
    document.getElementById("dayword").style.display = "block";
    document.getElementById("change1").style.display = "block";
    document.getElementById("change2").style.display = "block";
    document.getElementById("change3").style.display = "block";
    document.getElementById("change4").style.display = "block";

    document.getElementById("b1-1").style.display = "block";
    document.getElementById("b1-2").style.display = "block";
    document.getElementById("b1-3").style.display = "block";
    document.getElementById("b1-4").style.display = "block";

    document.getElementById("b2-1").style.display = "block";
    document.getElementById("b2-2").style.display = "block";
    document.getElementById("b2-3").style.display = "block";
    document.getElementById("b2-4").style.display = "block";

    document.getElementById("b3-1").style.display = "block";
    document.getElementById("b3-2").style.display = "block";
    document.getElementById("b3-3").style.display = "block";
    document.getElementById("b3-4").style.display = "block";

    document.getElementById("b4-1").style.display = "block";
    document.getElementById("b4-2").style.display = "block";
    document.getElementById("b4-3").style.display = "block";
    document.getElementById("b4-4").style.display = "block";

}

function play() {
    document.getElementById("play").style.display = "none";
    document.getElementById("info1").style.display = "none";
    document.getElementById("info2").style.display = "none";
    document.getElementById("info3").style.display = "none";
    document.getElementById("info4").style.display = "none";
    hideadd();
}

function showadd() {
    document.getElementById("addwind").style.display = "block";
    document.getElementById("addsolar").style.display = "block";
    document.getElementById("adddam").style.display = "block";
    document.getElementById("addbio").style.display = "block";
    document.getElementById("add").style.display = "block";
    document.getElementById("generate").style.display = "none";
    document.getElementById("displyid").style.display = "none";
    document.getElementById("moneyword").style.display = "none";
    document.getElementById("money").style.display = "none";
    document.getElementById("pollutionword").style.display = "none";
    document.getElementById("pollution").style.display = "none";
    document.getElementById("energy").style.display = "none";
    document.getElementById("energyword").style.display = "none";
    document.getElementById("day").style.display = "none";
    document.getElementById("dayword").style.display = "none";
    document.getElementById("change1").style.display = "none";
    document.getElementById("change2").style.display = "none";
    document.getElementById("change3").style.display = "none";
    document.getElementById("change4").style.display = "none";
    
    document.getElementById("b1-1").style.display = "none";
    document.getElementById("b1-2").style.display = "none";
    document.getElementById("b1-3").style.display = "none";
    document.getElementById("b1-4").style.display = "none";

    document.getElementById("b2-1").style.display = "none";
    document.getElementById("b2-2").style.display = "none";
    document.getElementById("b2-3").style.display = "none";
    document.getElementById("b2-4").style.display = "none";

    document.getElementById("b3-1").style.display = "none";
    document.getElementById("b3-2").style.display = "none";
    document.getElementById("b3-3").style.display = "none";
    document.getElementById("b3-4").style.display = "none";

    document.getElementById("b4-1").style.display = "none";
    document.getElementById("b4-2").style.display = "none";
    document.getElementById("b4-3").style.display = "none";
    document.getElementById("b4-4").style.display = "none";
}

function hideall() {
    showadd();
    document.getElementById("addwind").style.display = "none";
    document.getElementById("addsolar").style.display = "none";
    document.getElementById("adddam").style.display = "none";
    document.getElementById("addbio").style.display = "none";
    document.getElementById("add").style.display = "none";
}


function update() {

    document.getElementById("fact").innerHTML = factories;
    document.getElementById("day").innerHTML = day;
    document.getElementById("energy").innerHTML = energy;

    document.getElementById("money").innerHTML = Math.floor(money).toLocaleString('en-US'); 
    document.getElementById("pollution").innerHTML = pollution;
    document.getElementById("moneypergen").innerHTML = Math.floor(mfactor).toLocaleString('en-US'); 
    document.getElementById("pollutionpergen").innerHTML = pfactor;

    document.getElementById("wage").innerHTML = wage;
    document.getElementById("workersat").innerHTML = workersat;
    document.getElementById("price").innerHTML = price;
    document.getElementById("customersat").innerHTML = customersat;

    if (pollution <= 1000) {
        document.getElementById("pollution").style.color = "green";
        document.getElementById("pollutionword").innerHTML = "Pollution:";
    }
    if (pollution <= 0) {
        document.getElementById("pollutionword").innerHTML = "You Win:";
        document.getElementById("pollution").innerHTML = "Zero pollution!";
    }
    if (pollution >= 1000) {
        document.getElementById("pollution").style.color = "red";
        document.getElementById("pollutionword").innerHTML = "1000 pollution!";
        mfactor *= 0.95;
    }
    if (money <= 0) {
        document.getElementById("money").style.color = "red";
        document.getElementById("moneyword").innerHTML = "You're in debt!";
        mfactor *= 0.95;
    }
    if (money >= 0) {
        document.getElementById("money").style.color = "green";
        document.getElementById("moneyword").innerHTML = "Money:";
    }
    if (pfactor <= 0) {
        document.getElementById("pollutionpergen").style.color = "green";
    }
    if (mfactor <= 0) {
        document.getElementById("moneypergen").style.color = "red";
    }
    if (mfactor >= 0) {
        document.getElementById("moneypergen").style.color = "green";
    }
    if (workersat <= 50) {
        document.getElementById("workersat").style.color = "red";
        mfactor *= 0.95;
    }
    if (customersat <= 50) {
        document.getElementById("customersat").style.color = "red";
        mfactor *= 0.95;
    }
    if (workersat > 50) {
        document.getElementById("workersat").style.color = "green";
    }
    if (customersat > 50) {
        document.getElementById("customersat").style.color = "green";
    }
    if (workersat > 100) {
        document.getElementById("workersat").style.color = "blue";
        mfactor *= 1.05;
    }
    if (customersat > 100) {
        document.getElementById("customersat").style.color = "blue";
        mfactor += 1.05;
    }
}

function generate() {
    day++;
    update();
    money += mfactor;
    pollution += pfactor;
    
    if (document.getElementById("b1-1").innerHTML != "remove oil plant ($1000)") { if (f11 == 1) { pfactor -= 2; f11 = 0; } }
    if (document.getElementById("b1-2").innerHTML != "remove coal plant ($1500)") { if (f12 == 1) { pfactor -= 2; f12 = 0; } }
    if (document.getElementById("b1-3").innerHTML != "remove gas plant ($500)") { if (f13 == 1) { pfactor -= 2; f13 = 0; } }
    if (document.getElementById("b1-4").innerHTML != "remove fracking plant ($2500)") { if (f14 == 1) { pfactor -= 2; f14 = 0; } }

    if (document.getElementById("b2-1").innerHTML != "remove fracking plant ($2500)") { if (f21 == 1) { pfactor -= 2; f21 = 0; } }
    if (document.getElementById("b2-2").innerHTML != "remove gas plant ($500)") { if (f22 == 1) { pfactor -= 2; f22 = 0; } }
    if (document.getElementById("b2-3").innerHTML != "remove coal plant ($1500)") { if (f23 == 1) { pfactor -= 2; f23 = 0; } }
    if (document.getElementById("b2-4").innerHTML != "remove oil plant ($1000)") { if (f24 == 1) { pfactor -= 2; f24 = 0; } }

    if (document.getElementById("b3-1").innerHTML != "remove coal plant ($1500)") { if (f31 == 1) { pfactor -= 2; f31 = 0; } }
    if (document.getElementById("b3-2").innerHTML != "remove fracking plant ($2500)") { if (f32 == 1) { pfactor -= 2; f32 = 0; } }
    if (document.getElementById("b3-3").innerHTML != "remove oil plant ($1000)") { if (f33 == 1) { pfactor -= 2; f33 = 0; } }
    if (document.getElementById("b3-4").innerHTML != "remove gas plant ($500)") { if (f34 == 1) { pfactor -= 2; f34 = 0; } }

    if (document.getElementById("b4-1").innerHTML != "remove gas plant ($500)") { if (f41 == 1) { pfactor -= 2; f41 = 0; } }
    if (document.getElementById("b4-2").innerHTML != "remove oil plant ($1000)") { if (f42 == 1) { pfactor -= 2; f42 = 0; } }
    if (document.getElementById("b4-3").innerHTML != "remove fracking plant ($2500)") { if (f43 == 1) { pfactor -= 2; f43 = 0; } }
    if (document.getElementById("b4-4").innerHTML != "remove coal plant ($1500)") { if (f44 == 1) { pfactor -= 2; f44 = 0; } }
}

function upgrade(param1, param2) {
    mfactor = energy;
    if (document.getElementById("i" + String(param1) + "-" + String(param2)).src == "https://lh3.googleusercontent.com/1bheW3-QaUP5uEY_2h8rha6AlLK0zVp48_4fgvkeEMrv6sHJ6aQnv52NpqAzHqZiqpS5lqHoNw8b0ZBcjsHCe0ZqFYBvh8EPy-la_kwEIeUKgCTyT_43YdsPLUzhFUCX86ic7t4vig=w2400") {
        document.getElementById("i" + String(param1) + "-" + String(param2)).src = "https://lh3.googleusercontent.com/3FWrZGtifIZnqOZlORuOKjYHAMDOAKcRI1B7a1DZ_E2rljJws9zeFohlmJgThSToL4FOgjrk7ORM1miGTeV2yhBJVvkJ0W5HXJLTfj3qkQcra4Jqdu7vNAlSgU8yoQFVWrI8nKgXmw=w2400";
    }
    else if (document.getElementById("i" + String(param1) + "-" + String(param2)).src == "https://lh3.googleusercontent.com/3FWrZGtifIZnqOZlORuOKjYHAMDOAKcRI1B7a1DZ_E2rljJws9zeFohlmJgThSToL4FOgjrk7ORM1miGTeV2yhBJVvkJ0W5HXJLTfj3qkQcra4Jqdu7vNAlSgU8yoQFVWrI8nKgXmw=w2400") {
        document.getElementById("i" + String(param1) + "-" + String(param2)).src = "https://lh3.googleusercontent.com/VImF3VU93CHH-yhTqMHdTeDxGkUlE0ZGy14gDwohJ7r6r9bTDTS4c1SPRSEZdJp4hrD79IR83TugETVh9NR2xMM2UJxN_qSHAOX_NNlbx4uDqp61OBrevquahD53FrRQeXNMBVHQEg=w2400";
    }
    else if (document.getElementById("i" + String(param1) + "-" + String(param2)).src == "https://lh3.googleusercontent.com/E1IqfjlJPWkDc9E-ylu_0YOXX3mFZ5BM5BDnYRVLZ6sIlNxM7KP71UfMB7dVVxdl2feTiSJVxyEtc_ItoW2NrbkdqJCOhmlALe-jzDr2fOq8Ip2WJA_OeQF6A2F28N_LReD_XV-Row=w2400") {
        document.getElementById("i" + String(param1) + "-" + String(param2)).src = "https://lh3.googleusercontent.com/SgaApR6dVlyUt7I-LV0OI5AQmHnSfO2kztzc9XPoeR0IN9iY9Z5H039GVKOhh4jD770iVCSsypFTLvrEoOtWYvNEmVXMqfpprjYT-TSaDl0unS_fqo8duMH0OSozU1U8jCVa0dbvIw=w2400";
    }
    else if (document.getElementById("i" + String(param1) + "-" + String(param2)).src == "https://lh3.googleusercontent.com/SgaApR6dVlyUt7I-LV0OI5AQmHnSfO2kztzc9XPoeR0IN9iY9Z5H039GVKOhh4jD770iVCSsypFTLvrEoOtWYvNEmVXMqfpprjYT-TSaDl0unS_fqo8duMH0OSozU1U8jCVa0dbvIw=w2400") {
        document.getElementById("i" + String(param1) + "-" + String(param2)).src = "https://lh3.googleusercontent.com/9tquAGPXqzUxk7mtVtOFq3H4kLwuGWYW4FgmzMraa_JwvOujkP9HEoRwXF-TJoKKehPRN2gTpM6uY6QWUFilc5IgexsgLS_ErHqBeUKLEUwQ-wq8XASB-82K4AIJcygCJvCeTcIYgg=w2400";
    }
    else if (document.getElementById("i" + String(param1) + "-" + String(param2)).src == "https://lh3.googleusercontent.com/vSckAmqFhbeUnshRSwCttEu8YEGW4AaztLffPQGxTI5vI67dhNlW0yqCwemZhKdI8zGBdXQ3_QTNN288raCqbqGkjGwwp0kPTFql7_Vmr7O9P7ue_vj8PatlgdYnvx3gP8IY0fnuxw=w2400") {
        document.getElementById("i" + String(param1) + "-" + String(param2)).src = "https://lh3.googleusercontent.com/OnzNjJuUh4PHbuyI4QdhuBqd5aUWV2AcVujGg2U9DRdNp9q8wrGdbq3p38zMktIITu162MQWJ0cHoYzsPSrD4lnagiquiavrDK-yLqC_yXWdtuiBbsiDa6ZR5mrD9zSjBUwQx5Vz1w=w2400";
    }
    else if (document.getElementById("i" + String(param1) + "-" + String(param2)).src == "https://lh3.googleusercontent.com/OnzNjJuUh4PHbuyI4QdhuBqd5aUWV2AcVujGg2U9DRdNp9q8wrGdbq3p38zMktIITu162MQWJ0cHoYzsPSrD4lnagiquiavrDK-yLqC_yXWdtuiBbsiDa6ZR5mrD9zSjBUwQx5Vz1w=w2400") {
        document.getElementById("i" + String(param1) + "-" + String(param2)).src = "https://lh3.googleusercontent.com/VGgMAInMktxxb8Lg-qcjGMw4525yM9MRrBcKRdJpwUXlNJ-95Fa7hZjLUkppg13INSxHPe06cLLpvhHEn6nbQ9SVNpQ2BtphNCnX3o6QaC8jUgOFu8WzLN6AGAIqh_lliiHkimca7g=w2400";
    }
    else if (document.getElementById("i" + String(param1) + "-" + String(param2)).src == "https://lh3.googleusercontent.com/S5qvKjU7ziDkH2RA4Sh9AYgpIlTG9X6TEC7rDTwQbtRIMhvLRP6-9AlOUZDzPNysANOySBYMO_BJjvXKidQZ-m1W6GYsPFEfE-q7lPqWEr7dWZacpn4R9-VOSlgmyzFmlnKbAHiL5w=w2400") {
        document.getElementById("i" + String(param1) + "-" + String(param2)).src = "https://lh3.googleusercontent.com/2z9kioslftvd5pHT_D42Bei3nYjtkn62gZ2FxIeTnL9Ft9ISbE2HtVqQWgozrD-s8pFHDWI68HvhhxUNT8FFFg8SdxpfDrT4WRDBTG4uvtKw3q89LZyDPw7RMyPv6EFxHpmP4YncyQ=w2400";
    }
    else if (document.getElementById("i" + String(param1) + "-" + String(param2)).src == "https://lh3.googleusercontent.com/2z9kioslftvd5pHT_D42Bei3nYjtkn62gZ2FxIeTnL9Ft9ISbE2HtVqQWgozrD-s8pFHDWI68HvhhxUNT8FFFg8SdxpfDrT4WRDBTG4uvtKw3q89LZyDPw7RMyPv6EFxHpmP4YncyQ=w2400") {
        document.getElementById("i" + String(param1) + "-" + String(param2)).src = "https://lh3.googleusercontent.com/XQOsM8o7ilk5VX08cp4A_lcu2ebRNycZ5egKOvF9f9rnMbhipdtQP5ZjlKal1PascdmIR2o2V9RL9vUpJIKvLEx4u2fhV2DNpctHxWBC_231TqAZjbCSiXiepSds8o5qeOEozQEkkA=w2400";
    }
    update();
}

function add(param1, param2) {
    mfactor = energy;
    showadd();
    document.getElementById("addwind").onclick = function () {
        document.getElementById("i" + String(param1) + "-" + String(param2)).src = "https://lh3.googleusercontent.com/S5qvKjU7ziDkH2RA4Sh9AYgpIlTG9X6TEC7rDTwQbtRIMhvLRP6-9AlOUZDzPNysANOySBYMO_BJjvXKidQZ-m1W6GYsPFEfE-q7lPqWEr7dWZacpn4R9-VOSlgmyzFmlnKbAHiL5w=w2400";
        document.getElementById("b" + String(param1) + "-" + String(param2)).innerHTML = "upgrade: level 1 ($1000)";
        energy += 5;
        mfactor += 20;
        money -= 2500;
        hideadd();
    };
    document.getElementById("addsolar").onclick = function () {
        document.getElementById("i" + String(param1) + "-" + String(param2)).src = "https://lh3.googleusercontent.com/vSckAmqFhbeUnshRSwCttEu8YEGW4AaztLffPQGxTI5vI67dhNlW0yqCwemZhKdI8zGBdXQ3_QTNN288raCqbqGkjGwwp0kPTFql7_Vmr7O9P7ue_vj8PatlgdYnvx3gP8IY0fnuxw=w2400";
        document.getElementById("b" + String(param1) + "-" + String(param2)).innerHTML = "upgrade: level 1 ($1000)";
        energy += 3;
        mfactor += 15;
        money -= 1500;
        hideadd();
    };
    document.getElementById("adddam").onclick = function () {
        document.getElementById("i" + String(param1) + "-" + String(param2)).src = "https://lh3.googleusercontent.com/E1IqfjlJPWkDc9E-ylu_0YOXX3mFZ5BM5BDnYRVLZ6sIlNxM7KP71UfMB7dVVxdl2feTiSJVxyEtc_ItoW2NrbkdqJCOhmlALe-jzDr2fOq8Ip2WJA_OeQF6A2F28N_LReD_XV-Row=w2400 ";
        document.getElementById("b" + String(param1) + "-" + String(param2)).innerHTML = "upgrade: level 1 ($1000)";
        energy += 2;
        mfactor += 10;
        money -= 1000;
        hideadd();
    };
    document.getElementById("addbio").onclick = function () {
        document.getElementById("i" + String(param1) + "-" + String(param2)).src = "https://lh3.googleusercontent.com/1bheW3-QaUP5uEY_2h8rha6AlLK0zVp48_4fgvkeEMrv6sHJ6aQnv52NpqAzHqZiqpS5lqHoNw8b0ZBcjsHCe0ZqFYBvh8EPy-la_kwEIeUKgCTyT_43YdsPLUzhFUCX86ic7t4vig=w2400";
        document.getElementById("b" + String(param1) + "-" + String(param2)).innerHTML = "upgrade: level 1 ($1000)";
        energy += 1;
        mfactor += 5;
        money -= 500;
        hideadd();
    };
    update();
}

function clicked(param1, param2) {
    mfactor = energy;
    if (money > -5000) {
        if (document.getElementById("b" + String(param1) + "-" + String(param2)).innerHTML == "remove oil plant ($1000)") {
            factories--;
            energy--;
            money -= 1000;
            mfactor = mfactor 
            document.getElementById("i" + String(param1) + "-" + String(param2)).src = "";
            document.getElementById("b" + String(param1) + "-" + String(param2)).innerHTML = "add";
            update();
        }
        else if (document.getElementById("b" + String(param1) + "-" + String(param2)).innerHTML == "remove gas plant ($500)") {
            factories--;
            energy--;
            money -= 500;
            document.getElementById("i" + String(param1) + "-" + String(param2)).src = "";
            document.getElementById("b" + String(param1) + "-" + String(param2)).innerHTML = "add";
            update();
        }
        else if (document.getElementById("b" + String(param1) + "-" + String(param2)).innerHTML == "remove coal plant ($1500)") {
            factories--;
            energy--;
            money -= 1500;
            document.getElementById("i" + String(param1) + "-" + String(param2)).src = "";
            document.getElementById("b" + String(param1) + "-" + String(param2)).innerHTML = "add";
            update();
        }
        else if (document.getElementById("b" + String(param1) + "-" + String(param2)).innerHTML == "remove fracking plant ($2500)") {
            factories--;
            energy--;
            money -= 2500;
            document.getElementById("i" + String(param1) + "-" + String(param2)).src = "";
            document.getElementById("b" + String(param1) + "-" + String(param2)).innerHTML = "add";
            update();
        }
        else if (document.getElementById("b" + String(param1) + "-" + String(param2)).innerHTML == "add") {
            factories++;
            document.getElementById("b" + String(param1) + "-" + String(param2)).innerHTML = "";
            add(param1, param2);
            update();
        }
        else if (document.getElementById("b" + String(param1) + "-" + String(param2)).innerHTML == "upgrade: level 1 ($1000)") {
            document.getElementById("b" + String(param1) + "-" + String(param2)).innerHTML = "upgrade: level 2 ($1000)";
            upgrade(param1, param2);
            energy += 50;
            money -= 1000;
            update();
        }
        else if (document.getElementById("b" + String(param1) + "-" + String(param2)).innerHTML == "upgrade: level 2 ($1000)") {
            document.getElementById("b" + String(param1) + "-" + String(param2)).innerHTML = "Maxed out";
            document.getElementById("b" + String(param1) + "-" + String(param2)).style.backgroundColor = "#999";
            upgrade(param1, param2);
            energy += 100;
            money -= 1000;
            update();
        }
        else if (document.getElementById("b" + String(param1) + "-" + String(param2)).innerHTML == "Maxed out") {
        }
        else {
        }
    }   
    else {
        document.getElementById("moneyword").innerHTML = "You can't buy this!";
    }
}

function increasePrice() {
    if (price < 20) {
        price++;
        customersat -= 5;
        mfactor *= 1.05;
        update();
    }
}
function decreasePrice() {
    if (price > 1) {
        price--;
        customersat += 5;
        mfactor *= 0.95;
        update();
    }
}
function increaseWage() {
    if (wage < 20) {
        wage++;
        workersat += 5;
        mfactor *= 0.95;
        update();
    }
}
function decreaseWage() {
    if (wage > 1) {
        wage--;
        workersat -= 5;
        mfactor *= 1.05;
        update();
    }
}

showadd();
document.getElementById("addwind").style.display = "none";
document.getElementById("addsolar").style.display = "none";
document.getElementById("adddam").style.display = "none";
document.getElementById("addbio").style.display = "none";
document.getElementById("add").style.display = "none";