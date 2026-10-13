---
layout: default
---

# Recorreguts de fitxers

Un **recorregut** consisteix a llegir un fitxer **de principi a una MARCA_FI**, una línia darrere l'altra, i fer alguna cosa amb cada dada: escriure-la, sumar-la, comptar-la...

## Llegir una línia d'un fitxer

Fitxer `numeros.txt`:

```text
42
23
12
5
0
9
```

```csharp
public static void Main(string[] args)
{
    StreamReader fitxer = new StreamReader("numeros.txt");   // obrim el fitxer

    string linia = fitxer.ReadLine();                        // llegim una línia
    int num = Convert.ToInt32(linia);                        // la convertim a número

    Console.WriteLine($"He llegit el {num}");

    fitxer.Close();                                          // tanquem el fitxer
}
```

```text
> He llegit el 42
```

## Llegir dues línies d'un fitxer

Cada `ReadLine()` llegeix **la línia següent** del fitxer. Amb el mateix fitxer `numeros.txt`:

```csharp
public static void Main(string[] args)
{
    StreamReader fitxer = new StreamReader("numeros.txt");

    int num1 = Convert.ToInt32(fitxer.ReadLine());   // 1a línia
    int num2 = Convert.ToInt32(fitxer.ReadLine());   // 2a línia

    Console.WriteLine($"He llegit el {num1} i el {num2}");

    fitxer.Close();
}
```

```text
> He llegit el 42 i el 23
```

## Esquema de recorreguts amb While

Per saber on s'acaben les dades, el fitxer té una **marca de fi**: un valor especial que no és una dada. Al programa la guardem en una constant `MARCA_FI`.

### Una línia per dada (MARCA_FI = null)

Al fitxer `numeros.txt`, la marca de fi és el **null**.

Programa que mostra quants números hi ha en un fitxer. El programa acaba quan es troba un null.

```csharp
public static void Main(string[] args)
{
    const string MARCA_FI = null;
    int contador = 0;

    // obrim el fitxer i llegim la primera línia
    StreamReader fitxer = new StreamReader("numeros.txt");  
    string  linia = fitxer.ReadLine();           
    
    //mentre no trobem la marca
    while (num != MARCA_FI)
    {
        // tractament
        contador = contador + 1;

        // llegir la següent línia
        linia = fitxer.ReadLine();
    }

    // tanquem el fitxer
    fitxer.Close();

    // tractament final
    Console.WriteLine($"Hi ha {contador} números abans del null");
}
```

```text
> Hi ha 6 números abans del 0
```

### Una línia per dada (MARCA_FI = 0)

Al fitxer `numeros.txt`, la marca de fi és el **0**.

Programa que mostra quants números hi ha en un fitxer. El programa acaba quan es troba un 0.

```csharp
public static void Main(string[] args)
{
    const int MARCA_FI = 0;
    int contador = 0;

    // obrim el fitxer i llegim el primer número
    StreamReader fitxer = new StreamReader("numeros.txt");  
    int num = Convert.ToInt32(fitxer.ReadLine());

    //mentre no trobem la marca
    while (num != MARCA_FI)
    {
        // tractament
        contador = contador + 1;

        // llegir el següent número
        num = Convert.ToInt32(fitxer.ReadLine()); 
    }

    //tancar el fitxer
    fitxer.Close();

    // tractament final
    Console.WriteLine($"Hi ha {contador} números abans del 0");
}
```

```text
> Hi ha 4 números abans del 0
```

### Dues línies per dada

De vegades, cada element ocupa **dues línies**. Per exemple, el nom d'un alumne i, a sota, la seva nota.

Fitxer `notes.txt`, amb la marca `FI`:

```text
Anna
7
Pau
4
Marta
9
```

Programa que escriu cada alumne amb la seva nota:

```csharp
public static void Main(string[] args)
{
    const string MARCA_FI = null;
    StreamReader fitxer = new StreamReader("notes.txt");
    string nom;
    int nota;

    nom = fitxer.ReadLine();                        // 1. llegim el primer nom
    while (nom != MARCA_FI)                         // 2. mentre no trobem la marca
    {
        nota = Convert.ToInt32(fitxer.ReadLine());  // llegim la segona línia: la nota
        Console.WriteLine($"{nom}: {nota}");
        nom = fitxer.ReadLine();                    // 3. llegim el nom següent
    }
    fitxer.Close();
}
```

```text
> Anna: 7
> Pau: 4
> Marta: 9
```

## Exercicis

### 📝 Exercici: suma dels números

Fes un programa que llegeixi el fitxer `numeros.txt` i escrigui la suma de tots els números fins a la marca de fi sigui zero.

```text
> Suma: 82
```

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

```csharp
public static void Main(string[] args)
{
    const int MARCA_FI = 0;
    StreamReader fitxer = new StreamReader("numeros.txt");
    int num;
    int suma = 0;

    num = Convert.ToInt32(fitxer.ReadLine());
    while (num != MARCA_FI)
    {
        suma = suma + num;
        num = Convert.ToInt32(fitxer.ReadLine());
    }
    fitxer.Close();

    Console.WriteLine($"Suma: {suma}");
}
```

</details>

### 📝 Exercici: comptar números grans

Fes un programa que llegeixi **tot** el fitxer `numeros.txt` i compti quants números són més grans que 5. En aquest cas la `MARCA_FI` ha de ser `null`.

```text
> Més grans que 5: 4
```

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

```csharp
public static void Main(string[] args)
{
    const string MARCA_FI = null;
    StreamReader fitxer = new StreamReader("numeros.txt");
    string linia;
    int num;
    int comptador = 0;

    linia = fitxer.ReadLine();
    while (linia != MARCA_FI)
    {
        num = Convert.ToInt32(linia);
        if (num > 5)
        {
            comptador = comptador + 1;
        }
        linia = fitxer.ReadLine();
    }
    fitxer.Close();

    Console.WriteLine($"Més grans que 5: {comptador}");
}
```

</details>

### 📝 Exercici: aprovats

Fes un programa que llegeixi el fitxer `notes.txt` i escrigui només el nom dels alumnes aprovats (nota 5 o més). Llegir totes les línies del fitxer.

```text
> Anna
> Marta
```

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

```csharp
public static void Main(string[] args)
{
    const string MARCA_FI = null;
    StreamReader fitxer = new StreamReader("notes.txt");
    string nom;
    int nota;

    nom = fitxer.ReadLine();
    while (nom != MARCA_FI)
    {
        nota = Convert.ToInt32(fitxer.ReadLine());
        if (nota >= 5)
        {
            Console.WriteLine(nom);
        }
        nom = fitxer.ReadLine();
    }
    fitxer.Close();
}
```

</details>