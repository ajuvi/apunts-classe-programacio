---
layout: default
---

# Recorreguts de fitxers amb for

Quan la **primera línia** del fitxer ens diu **quantes dades hi ha**, ja sabem quantes voltes ha de fer el bucle. En aquest cas fem servir un `for`, i el fitxer **no necessita cap MARCA_FI**.

## Esquema de recorreguts amb for

1. Obrim el fitxer i llegim la **primera línia**: el nombre d'elements.
2. Fem un `for` que dona **tantes voltes com elements** hi ha.
3. A cada volta, **llegim** una dada i en fem el **tractament**.
4. Tanquem el fitxer i fem el **tractament final**.

### Una línia per dada

Fitxer `numeros.txt`. La primera línia (`5`) indica que hi ha 5 números a continuació:

```text
5
23
12
42
5
9
```

Programa que calcula la suma de tots els números del fitxer:

```csharp
public static void Main(string[] args)
{
    const string NOM_FITXER = "numeros.txt";
    int quantitat;
    int suma = 0;

    // obrim el fitxer i llegim quants números hi ha
    StreamReader fitxer = new StreamReader(NOM_FITXER);
    quantitat = Convert.ToInt32(fitxer.ReadLine());

    // repetim tantes vegades com números hi ha
    for (int i = 0; i < quantitat; i++)
    {
        // llegir el número
        int num = Convert.ToInt32(fitxer.ReadLine());

        // tractament
        suma = suma + num;
    }

    // tanquem el fitxer
    fitxer.Close();

    // tractament final
    Console.WriteLine($"Suma: {suma}");
}
```

```text
> Suma: 91
```

### Dues línies per dada

Cada element ocupa **dues línies**: el nom de l'alumne i, a sota, la seva nota. La primera línia diu quants alumnes hi ha.

Fitxer `notes.txt`:

```text
3
Anna
7
Pau
4
Marta
9
```

Programa que compta quants alumnes han aprovat:

```csharp
public static void Main(string[] args)
{
    const string NOM_FITXER = "notes.txt";
    int quantitat;
    int aprovats = 0;

    // obrim el fitxer i llegim quants alumnes hi ha
    StreamReader fitxer = new StreamReader(NOM_FITXER);
    quantitat = Convert.ToInt32(fitxer.ReadLine());

    for (int i = 0; i < quantitat; i++)
    {
        // llegir les dues línies de l'alumne
        string nom = fitxer.ReadLine();
        int nota = Convert.ToInt32(fitxer.ReadLine());

        // tractament
        if (nota >= 5)
        {
            aprovats = aprovats + 1;
        }
    }

    // tanquem el fitxer
    fitxer.Close();

    // tractament final
    Console.WriteLine($"Han aprovat {aprovats} de {quantitat} alumnes");
}
```

```text
> Han aprovat 2 de 3 alumnes
```

## Exercicis

### 📝 Exercici: comptar números grans

Fes un programa que llegeixi el fitxer  [**numeros.txt**](numeros.txt) i compti quants números són més grans que 5.

```text
> Més grans que 5: 4
```

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

```csharp
public static void Main(string[] args)
{
    const string NOM_FITXER = "numeros.txt";

    int quantitat;
    int comptador = 0;

    StreamReader fitxer = new StreamReader(NOM_FITXER);
    quantitat = Convert.ToInt32(fitxer.ReadLine());

    for (int i = 0; i < quantitat; i++)
    {
        int num = Convert.ToInt32(fitxer.ReadLine());
        if (num > 5)
        {
            comptador = comptador + 1;
        }
    }
    fitxer.Close();

    Console.WriteLine($"Més grans que 5: {comptador}");
}
```

</details>

### 📝 Exercici: nom aprovats

Fes un programa que llegeixi el fitxer  [**notes.txt**](notes.txt) i escrigui només el nom dels alumnes aprovats (nota 5 o més).

```text
> Anna
> Marta
```

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

```csharp
public static void Main(string[] args)
{
    const string NOM_FITXER = "notes.txt";

    int quantitat;
    string nom;
    int nota;

    StreamReader fitxer = new StreamReader(NOM_FITXER);
    quantitat = Convert.ToInt32(fitxer.ReadLine());

    for (int i = 0; i < quantitat; i++)
    {
        nom = fitxer.ReadLine();
        nota = Convert.ToInt32(fitxer.ReadLine());
        if (nota >= 5)
        {
            Console.WriteLine(nom);
        }
    }
    fitxer.Close();
}
```

</details>

### 📝 Exercici: mitjana de les notes

Fes un programa que llegeixi el fitxer [**notes.txt**](notes.txt) i calculi la mitjana de les notes de tots els alumnes.

> Pista: suma totes les notes dins del bucle i, quan acabis, divideix la suma entre la quantitat d'alumnes. Compte amb la **divisió entera**!

```text
> Mitjana: 6,67
```

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

```csharp
public static void Main(string[] args)
{
    const string NOM_FITXER = "notes.txt";
    int quantitat;
    int suma = 0;

    // obrim el fitxer i llegim quants alumnes hi ha
    StreamReader fitxer = new StreamReader(NOM_FITXER);
    quantitat = Convert.ToInt32(fitxer.ReadLine());

    for (int i = 0; i < quantitat; i++)
    {
        // llegir les dues línies de l'alumne
        string nom = fitxer.ReadLine();
        int nota = Convert.ToInt32(fitxer.ReadLine());

        // tractament
        suma = suma + nota;
    }

    // tanquem el fitxer
    fitxer.Close();

    // tractament final
    double mitjana = (double)suma / quantitat;
    Console.WriteLine($"Mitjana: {mitjana:0.00}");
}
```

</details>