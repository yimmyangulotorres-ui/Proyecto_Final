const ejercicios = [

{
titulo: "Java BigDecimal",
codigo: `import java.math.BigDecimal;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;
/**
@author: Yimmy Angulo

*/

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        String[] s = new String[n];

        for (int i = 0; i < n; i++) {
            s[i] = sc.next();
        }

        Arrays.sort(s, new Comparator<String>() {
            @Override
            public int compare(String a, String b) {
                BigDecimal num1 = new BigDecimal(a);
                BigDecimal num2 = new BigDecimal(b);
                return num2.compareTo(num1); // Orden descendente
            }
        });

        for (String value : s) {
            System.out.println(value);
        }

        sc.close();
    }
}
`,
prueba: `
Entrada:
9
-100
50
0
56.6
90
0.12
.12
02.34
000.000
================================================================
Salida:
90
56.6
50
02.34
0.12
.12
0
000.000
-100
`
},

{
titulo: "Java Primality Test",
codigo: `import java.io.*;
import java.math.BigInteger;
import java.util.Scanner;

/**
@author: Yimmy Angulo

*/

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        BigInteger n = sc.nextBigInteger();

        if (n.isProbablePrime(100)) {
            System.out.println("prime");
        } else {
            System.out.println("not prime");
        }

        sc.close();
    }
}`,
prueba: `
Entrada:
13

Salida:
Prime
`
},

{
titulo: "Java BigInteger",
codigo: `import java.math.BigInteger;
import java.util.Scanner;

/**
@author: Yimmy Angulo

*/

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        BigInteger a = new BigInteger(sc.nextLine());
        BigInteger b = new BigInteger(sc.nextLine());

        System.out.println(a.add(b));
        System.out.println(a.multiply(b));

        sc.close();
    }
}`,
prueba: `
Entrada:
1234
20

Salida:
1254
24680
`
},

{
titulo: "Java Inheritance I",
codigo: `/**
@author: Yimmy Angulo

*/

class Animal {
    public void walk() {
        System.out.println("I am walking");
    }
}

class Bird extends Animal {
    public void fly() {
        System.out.println("I am flying");
    }

    public void sing() {
        System.out.println("I am singing");
    }
}

public class Solution {
    public static void main(String[] args) {
        Animal animal = new Bird();

        animal.walk();

        Bird bird = (Bird) animal;
        bird.fly();
        bird.sing();
    }
}
`,
prueba: `

Salida:
================================
I am walking
I am flying
I am singing
================================
`
},

{
titulo: "Java Inheritance II",
codigo: `import java.util.*;

/**
@author: Yimmy Angulo

*/

class Arithmetic {
    public int add(int a, int b) {
        return a + b;
    }
}

class Adder extends Arithmetic {
}

public class Solution {
    public static void main(String[] args) {
        Adder a = new Adder();

        System.out.println("My superclass is: " +
                a.getClass().getSuperclass().getName());

        System.out.print(a.add(10, 32) + " ");
        System.out.print(a.add(10, 3) + " ");
        System.out.print(a.add(10, 10));
    }
}
`,
prueba: `

Salida
My superclass is: Arithmetic

42 13 20
`
},

{
titulo: "Java Abstract Class",
codigo: `import java.util.Scanner;

/**
@author: Yimmy Angulo

*/

abstract class Book {
    String title;

    abstract void setTitle(String s);

    String getTitle() {
        return title;
    }
}

class MyBook extends Book {

    @Override
    void setTitle(String s) {
        title = s;
    }
}

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String title = sc.nextLine();

        MyBook new_novel = new MyBook();
        new_novel.setTitle(title);

        System.out.println("The title is: " + new_novel.getTitle());

        sc.close();
    }
}
`,
prueba: `
Entrada:
A tale of two cities

Salida:
The title is: A tale of two cities
`
},

{
titulo: "Java Interface",
codigo: `import java.util.*;

/**
@author: Yimmy Angulo

*/
interface AdvancedArithmetic {
    int divisor_sum(int n);
}

class MyCalculator implements AdvancedArithmetic {

    @Override
    public int divisor_sum(int n) {
        int sum = 0;

        for (int i = 1; i <= n; i++) {
            if (n % i == 0) {
                sum += i;
            }
        }

        return sum;
    }
}

public class Solution {

    public static void main(String[] args) {
        MyCalculator my_calculator = new MyCalculator();

        System.out.println("I implemented: AdvancedArithmetic");

        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        System.out.println(my_calculator.divisor_sum(n));

        sc.close();
    }
}
`,
prueba: `
Entrada:
6

Salida:
I implemented: AdvancedArithmetic

12
`
},

{
titulo: "Java Method Override",
codigo: `/**
@author: Yimmy Angulo

*/

class Sports {

    String getName() {
        return "Generic Sports";
    }

    void getNumberOfTeamMembers() {
        System.out.println("Each team has n players in " + getName());
    }
}

class Soccer extends Sports {

    @Override
    String getName() {
        return "Soccer Class";
    }

    @Override
    void getNumberOfTeamMembers() {
        System.out.println("Each team has 11 players in " + getName());
    }
}

public class Solution {

    public static void main(String[] args) {

        Sports c1 = new Sports();
        Soccer c2 = new Soccer();

        System.out.println(c1.getName());
        c1.getNumberOfTeamMembers();

        System.out.println(c2.getName());
        c2.getNumberOfTeamMembers();
    }
}
`,
prueba: `

Salida:
Generic Sports
Each team has n players in Generic Sports
Soccer Class
Each team has 11 players in Soccer Class
`
},

{
titulo: "Java Method Overriding 2 (Super Keyword)",
codigo: `import java.io.*;
import java.util.*;

/**
@author: Yimmy Angulo

*/

class BiCycle {
    String define_me() {
        return "a vehicle with pedals.";
    }
}

class MotorCycle extends BiCycle {

    String define_me() {
        return "a cycle with an engine.";
    }

    MotorCycle() {
        System.out.println("Hello I am a motorcycle, I am " + define_me());

        String temp = super.define_me();

        System.out.println("My ancestor is a cycle who is " + temp);
    }
}

public class Solution {

    public static void main(String[] args) {
        MotorCycle m = new MotorCycle();
    }
}
`,
prueba: `

Salida:
Hello I am a motorcycle, I am a cycle with an engine.
My ancestor is a cycle who is a vehicle with pedals
`
},

{
titulo: "Java Instanceof Keyword",
codigo: `import java.util.*;

/**
@author: Yimmy Angulo

*/

class Student{}
class Rockstar{   }
class Hacker{}


public class InstanceOFTutorial{
	
   static String count(ArrayList mylist){
      int a = 0,b = 0,c = 0;
      for(int i = 0; i < mylist.size(); i++){
         Object element=mylist.get(i);
         if(element instanceof Student)
            a++;
         if(element instanceof Rockstar)
            b++;
         if(element instanceof Hacker)
            c++;
      }
      String ret = Integer.toString(a)+" "+ Integer.toString(b)+" "+ Integer.toString(c);
      return ret;
   }

   public static void main(String []args){
      ArrayList mylist = new ArrayList();
      Scanner sc = new Scanner(System.in);
      int t = sc.nextInt();
      for(int i=0; i<t; i++){
         String s=sc.next();
         if(s.equals("Student"))mylist.add(new Student());
         if(s.equals("Rockstar"))mylist.add(new Rockstar());
         if(s.equals("Hacker"))mylist.add(new Hacker());
      }
      System.out.println(count(mylist));
   }
}

`,
prueba: `
Entrada:
5
Student
Student
Rockstar
Student
Hacker

Salida:
3  1  1
`
},

{
titulo: "Java Iterator",
codigo: `import java.util.*;

/**
@author: Yimmy Angulo

*/

public class Solution {

    static Iterator func(ArrayList mylist) {
        Iterator it = mylist.iterator();

        while (it.hasNext()) {
            Object element = it.next();
            if (element.equals("###")) {
                break;
            }
        }

        return it;
    }

    public static void main(String[] args) {
        ArrayList mylist = new ArrayList();
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int m = sc.nextInt();

        for (int i = 0; i < n; i++) {
            mylist.add(sc.nextInt());
        }

        mylist.add("###");

        for (int i = 0; i < m; i++) {
            mylist.add(sc.next());
        }

        Iterator it = func(mylist);

        while (it.hasNext()) {
            Object element = it.next();
            System.out.println((String) element);
        }

        sc.close();
    }
}
`,
prueba: `
Entrada:
2 2
42
10
hello
java

Salida:
hello
java
`
},

{
titulo: "Java Exception Handling (Try-catch)",
codigo: `import java.util.*; 

/**
@author: Yimmy Angulo

*/

public class Solution {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        try {
            int x = sc.nextInt();
            int y = sc.nextInt();

            System.out.println(x / y);
        }
        catch (InputMismatchException e) {
            System.out.println("java.util.InputMismatchException");
        }
        catch (ArithmeticException e) {
            System.out.println(e);
        }
    }
}`,
prueba: `
Entrada:
Hello

0

Salida:
java.util.InputMismatchException
`
},

{
titulo: "Java Exception Handling",
codigo: `import java.util.*;

/**
@author: Yimmy Angulo

*/

class MyCalculator {

    public long power(int n, int p) throws Exception {

        if (n == 0 && p == 0) {
            throw new Exception("n and p should not be zero.");
        }

        if (n < 0 || p < 0) {
            throw new Exception("n or p should not be negative.");
        }

        long result = 1;

        for (int i = 0; i < p; i++) {
            result *= n;
        }

        return result;
    }
}

public class Solution {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        MyCalculator my_calculator = new MyCalculator();

        while (in.hasNextInt()) {
            int n = in.nextInt();
            int p = in.nextInt();

            try {
                System.out.println(my_calculator.power(n, p));
            } catch (Exception e) {
                System.out.println(e);
            }
        }
    }
}
`,
prueba: `
Entrada:
3 5
2 4
0 0
-1 -2
-1 3

Salida:
243
16
java.lang.Exception: n and p should not be zero.
java.lang.Exception: n or p should not be negative.
java.lang.Exception: n or p should not be negative.
`
}

];
const contenedor = document.getElementById("contenedor-cards");

if (contenedor) {
    ejercicios.forEach(ej => {
        const card = document.createElement("div");
        card.className = "card";

       card.innerHTML = `
<h2>${ej.titulo}</h2>

<div class="code-header">
    <span class="dot red"></span>
    <span class="dot yellow"></span>
    <span class="dot green"></span>
</div>

<pre><code>${ej.codigo.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>

<div class="prueba">
    <h3>Prueba de escritorio</h3>
    <pre>${ej.prueba}</pre>
</div>
`;

        contenedor.appendChild(card);
    });
} else {
    console.error("No existe #contenedor-cards");
};

// animación recomendaciones
const recoObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".reco-card").forEach(card => {
  recoObserver.observe(card);
});
const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

/* Cerrar al seleccionar una opción */

document.querySelectorAll(".sidebar a").forEach(link => {
    link.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });
});
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {
    observer.observe(card);
});
