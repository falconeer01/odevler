// 1-Klavyeden girilecek X değerinden N değerine kadar tüm doğal sayıları listeleyen algoritmayı ve js kodunu yazınız.

function listNaturalNumbers(){
    let x = parseInt(prompt("Bir başlangıç değeri giriniz..."));
    let n = parseInt(prompt("Bir bitiş değeri giriniz..."));

    if(x<0 && n>0){
        for(let i=0; i<n; i++){
            console.log(i);
        }
    }else if(x>0 && n<0){
        for(let i=x; i>0; i--){
            console.log(i);
        }
    }else if(x<0 && n<0){
        alert("Sayılardan biri pozitif olmalıdır.");
    }else{
        for(let i=x; i<n; i++){
            console.log(i);
        }
    }
}

// listNaturalNumbers();


// 2-Klavyeden girilecek bir N değerine kadar fibonecci dizisini bulan algoritmayı ve js kodunu yazını. Fibonecci dizisi 1 1 değerleri ile başlar ve yeni değer kendinden öndeki iki değerin toplamı olarak bulunur. (1 1 2 3 5 8 13
//     21...)


function printFibs(){
    let fibNumbers = [];

    let prIndex = prompt("Fibonacci dizisinin uzunluğunu giriniz...");

    for(let i=prIndex; i>0; i--){
        fibNumbers.push(fib(i));
    }

    alert(fibNumbers);
}

function fib(index){
    if(index == 0){
        return 1;
    }else if(index == 1){
        return 1;
    }else{
        return fib(index-1) + fib(index-2);
    }
}

// printFibs();


// 3-Klavyeden girilen bir sayının tüm tam bölenlerini bulup listeleyen (Ekrana yazan) algoritmayı ve js kodlarını yazınız.

function listEvenDividers(){
    let evenDividers = []

    let x = prompt("Bir sayı giriniz...");

    for(let i=1; i<=x; i++){
        x % i == 0 ? evenDividers.push(i) : console.log(i);
    }

    alert(evenDividers);
}

// listEvenDividers();


// 4-Klavyeden girilen üç sayıdan büyüklük sıralamasına göre ortadakini bulup ekrana yazan program için algoritmayı ve js kodunu yazınız.

function findMedian(){
    let x = prompt("İlk sayıyı giriniz...");
    let y = prompt("İkinci sayıyı giriniz...");
    let z = prompt("Üçüncü sayıyı giriniz...");

    let numbers = [];

    numbers.push(x, y, z);

    numbers.sort((a,b) => a-b);

    let mid = Math.ceil(numbers.length/2)-1;

    console.log(numbers[mid]);
}

// findMedian();


// 5-Klavyeden girilen A ve B gibi iki sayının bölme işlemi kullanmadan sadece toplama ve çıkarma kullanarak kalanlı bölme yapan algoritmayı ve js kodunu yazınız.

function divideWithExtraction(){
    let x = parseInt(prompt("İlk sayıyı giriniz..."));
    let y = parseInt(prompt("İkinci sayıyı giriniz..."));

    let remainder = 0;
    let count = 1;

    if(x<0 && y>0){
        count = -1;
        while(x<=0){
            x+=y;
            count++;
        }
        remainder = x-y;
        alert(`Sonuç: ${count}, Kalan: ${remainder}`);
    }
    else if(x>0 && y<0){
        while(x>=0){
            x+=y;
            count--;
        }
        remainder = x-y;
        alert(`Sonuç: ${count}, Kalan: ${remainder}`);
    }else if(x<0 && y<0){
        while(x<=0){
            x-=y;
            count--;
        }
        remainder = x+y;
        alert(`Sonuç: ${count}, Kalan: ${remainder}`);
    }else{
        count = -1;
        while(x>=0){
            x-=y;
            count++;
        }
        remainder=x+y;
        alert(`Sonuç: ${count}, Kalan: ${remainder}`);
    }
}

// divideWithExtraction();


// 6-Klavyeden girilen A ve B gibi iki sayıyı, çarpma işlemi kullanmadan sadece toplama ve çıkarma kullanarak çarpıp sonucu ekrana yazan algoritmayı ve js kodunu yazınız.

function multiplyWithSum(){
    let result = 0;
    let x = parseInt(prompt("Çarpılacak sayıyı giriniz..."));
    let y = parseInt(prompt("Çarpanı giriniz..."));

    if(x===0){
        alert(0);
    }
    else if(x<0 && y>0){
        x = Math.abs(x);
        for(let i=0; i<y; i++){
            result-=x;
        }

        alert(result);
    }else if(x>0 && y<0){
        for(let i=0; i<Math.abs(y); i++){
            result-=x;
        }

        alert(result);
    }else if(x<0 && y<0){
        for(let i=0; i<Math.abs(y); i++){
            result-=x;
        }

        alert(result);
    }else{
        for(let i=0; i<y; i++){
            result+=x;
        }

        alert(result);
    }
}

// multiplyWithSum();


// 7- Sıfır –0 girilinceye kadar klavyeden okutulan değerlerin ortalamasını hesaplayıp ekrana yazan algoritmayı ve js kodunu yazınız.

function printAvg(){
    let numbers = [];
    let avg, sum = 0;
    let x = 1;
    
    while(x!=0){
        x = parseInt(prompt("Bir sayı giriniz"));

        if(x!=0){
            numbers.push(x);
        }else{
            break;
        }
    }

    for(let i=0; i<numbers.length; i++){
        sum+=numbers[i];
    }

    avg = sum/numbers.length;

    alert(avg);
}

// printAvg();


// 8-Klavyeden girilecek 20 sayının tek olanlarını ayrı çift olanlarını ayrı toplayıp sonuçları ekrana yazan algoritmayı ve js kodunu yazınız.

function numParser(){
    let evenNumbers = [];
    let oddNumbers = [];

    for(let i=0; i<20; i++){
        let x = parseInt(prompt("Bir sayı giriniz..."));

        if(x%2==0){
            evenNumbers.push(x);
        }else{
            oddNumbers.push(x);
        }
    }

    let evenSum = evenNumbers.reduce((sum, n) => sum+=n, 0);
    let oddSum = oddNumbers.reduce((sum, n) => sum+=n, 0);

    console.log(evenSum, oddSum);
}

// numParser();


// 9-Klavyeden girilecek iki pozitif tam sayının OBEB (Ortak Bölenlerin En Büyüğü)’ini bulacak algoritmayı ve js kodunu yazınız. Örneğin elimizde 3654 ve 1365 değerleri olsun. Bu değerlerin OBEB’i şu şekilde bulunmaktadır.

function findGCD(){
    let x = parseInt(prompt("İlk sayıyı giriniz..."));
    let y = parseInt(prompt("İkinci sayıyı giriniz..."));
    
    while(x % y > 0){
        let remainder = x % y;
        x = y;
        y = remainder;
    }

    alert(y);
}

// findGCD();


// 10-Klavyeden girilecek bir sayının tek mi çift mi olduğunu bulabilecek bir algoritmayı ve js kodunu yazınız. Bu algoritmayı geliştirirken başvurduğunuz varsayımları da yazınız.

function isEven(){
    let x = parseInt(prompt("Bir sayı giriniz..."));

    if(x%2==0){
        alert(`${x} bir çift sayı.`);
    }else{
        alert(`${x} bir tek sayı.`);
    }
}

// isEven();

// Bu algoritmayı yazarken kullanıcıdan aldığımız sayının 2'ye bölümünden kalanına göre sonucu belirledim. Eğer 2'ye bölümden kalan 0 ise girilen sayı çifttir. Eğer kalan 1 ise girilen sayı tektir.