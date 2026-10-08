---
layout: default
---

# Estructures repetitiva

Fins ara, els programes executaven les instruccions una darrere l'altra. Amb les **estructures condicionals**, el programa pot **triar quin camí segueix** segons si es compleix una **condició** o no.

<img src="cruilla.png" alt="Cruïlla amb els senyals if, else i else if" width="300">

## Estructura if

L'`if` executa un bloc d'instruccions **només si la condició és certa**. Si és falsa, se'l salta i el programa continua.

<img src="if.png" alt="Diagrama de flux de l'estructura if" width="250">

```csharp
if (condicio)
{
    // instruccions que s'executen si la condició és certa
}
```

Exemple: funció `ValorAbsolut` que retorna el valor absolut d'un nombre.

```csharp

public static double ValorAbsolut(double x)
{
    double resultat;
    resultat = x;
    if (x < 0)
    {
        resultat = -x;
    }
    return resultat;
}

public static void Main(string[] args)
{
    Console.WriteLine(ValorAbsolut(-8));
    Console.WriteLine(ValorAbsolut(3));
}

```

```text
> 8
> 3
```

> **Error habitual:** no posis `;` després de la condició. `if (x < 0);` és un `if` buit, i el bloc de sota s'executaria **sempre**.

### 📝 Exercici: funció LimitarVolum

El volum d'un altaveu va de 0 a 100. Implementa una funció `LimitarVolum` que rebi un volum i el retorni tal com és, però si passa de 100, ha de retornar 100.

```csharp
public static void Main(string[] args)
{
    Console.WriteLine($"Volum: {LimitarVolum(40)}");
    Console.WriteLine($"Volum: {LimitarVolum(150)}");
}
```

```text
> Volum: 40
> Volum: 100
```

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

```csharp
public static int LimitarVolum(int volum)
{
    int resultat;
    resultat = volum;
    if (volum > 100)
    {
        resultat = 100;
    }
    return resultat;
}
```

</details>

### 📝 Exercici: funció CalcularPreuFinal

Una botiga en línia cobra **5 €** d'enviament, però l'enviament és gratuït si la compra és de **50 € o més**. Implementa una funció `CalcularPreuFinal` que rebi l'import de la compra i retorni el total a pagar.

```csharp
public static void Main(string[] args)
{
    Console.WriteLine($"Total: {CalcularPreuFinal(30)} €");
    Console.WriteLine($"Total: {CalcularPreuFinal(60)} €");
}
```

```text
> Total: 35 €
> Total: 60 €
```

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

```csharp
public static double CalcularPreuFinal(double import)
{
    double total;
    total = import;
    if (import < 50)
    {
        total = total + 5;
    }
    return total;
}
```

</details>

## Estructura if-else

L'`if-else` tria **un camí entre dos**: si la condició és certa s'executa el bloc de l'`if`, i si és falsa s'executa el bloc de l'`else`. Sempre s'executa **un dels dos, i només un**.

<img src="if-else.png" alt="Diagrama de flux de l'estructura if-else" width="350">

```csharp
if (condicio)
{
    // instruccions si la condició és certa
}
else
{
    // instruccions si la condició és falsa
}
```

Exemple: funció `PreuEntrada` que calcula el preu d'una entrada de cinema. Els menors de 12 anys paguen **5 €** i la resta, **8 €**.

```csharp
public static int PreuEntrada(int edat)
{
    int preu;
    if (edat < 12)
    {
        preu = 5;
    }
    else
    {
        preu = 8;
    }
    return preu;
}

public static void Main(string[] args)
{
    Console.WriteLine($"Entrada per a 9 anys: {PreuEntrada(9)} €");
    Console.WriteLine($"Entrada per a 30 anys: {PreuEntrada(30)} €");
}
```

```text
> Entrada per a 9 anys: 5 €
> Entrada per a 30 anys: 8 €
```

### 📝 Exercici: funció EsMajorEdat

Implementa una funció `EsMajorEdat` que rebi una edat i retorni `true` si és major d'edat (18 anys o més) i `false` en cas contrari.

```csharp
public static void Main(string[] args)
{
    Console.WriteLine(EsMajorEdat(17));
    Console.WriteLine(EsMajorEdat(18));
}
```

```text
> False
> True
```

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

```csharp
public static bool EsMajorEdat(int edat)
{
    bool resultat;
    if (edat >= 18)
    {
        resultat = true;
    }
    else
    {
        resultat = false;
    }
    return resultat;
}
```

</details>

### 📝 Exercici: funció Qualificar

Implementa una funció `Qualificar` que rebi una nota i retorni `"Assolit"` si és 5 o més, i `"No assolit"` en cas contrari.

```csharp
public static void Main(string[] args)
{
    Console.WriteLine($"Un 7: {Qualificar(7)}");
    Console.WriteLine($"Un 3: {Qualificar(3)}");
}
```

```text
> Un 7: Assolit
> Un 3: No assolit
```

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

```csharp
public static string Qualificar(double nota)
{
    string resultat;
    if (nota >= 5)
    {
        resultat = "Assolit";
    }
    else
    {
        resultat = "No assolit";
    }
    return resultat;
}
```

</details>

## Estructura if-else if-else

Quan hi ha **més de dos casos**, encadenem condicions amb `else if`:

- Les condicions es comproven **en ordre**, de dalt a baix.
- S'executa el bloc de la **primera condició certa**, i la resta se salten.
- Si cap condició és certa, s'executa l'`else` final.

<img src="if-else-if.jpeg" alt="Diagrama de flux de l'estructura if-else if-else" width="400">

```csharp
if (condicio1)
{
    // si condicio1 és certa
}
else if (condicio2)
{
    // si condicio1 és falsa i condicio2 és certa
}
else
{
    // si cap condició és certa
}
```

Exemple: funció `Signe` que indica si un nombre és positiu, negatiu o zero.

```csharp
public static string Signe(int num)
{
    string resultat;
    if (num > 0)
    {
        resultat = "positiu";
    }
    else if (num < 0)
    {
        resultat = "negatiu";
    }
    else
    {
        resultat = "zero";
    }
    return resultat;
}

public static void Main(string[] args)
{
    Console.WriteLine(Signe(5));
    Console.WriteLine(Signe(-3));
    Console.WriteLine(Signe(0));
}
```

```text
> positiu
> negatiu
> zero
```

### 📝 Exercici: funció Qualificacio

Implementa una funció `Qualificacio` que rebi una nota entre 0 i 10 i retorni la qualificació en format text:

| Nota            | Qualificació      |
|-----------------|-------------------|
| [0, 5)          | No assolit        |
| [5, 7)          | Aprovat           |
| [7, 9)          | Notable           |
| [9, 10)         | Excel·lent        |
| 10              | Matrícula d'honor |
| < 0 o > 10      | Nota no vàlida    |

```csharp
public static void Main(string[] args)
{
    Console.WriteLine(Qualificacio(4.5));
    Console.WriteLine(Qualificacio(7.2));
    Console.WriteLine(Qualificacio(10));
    Console.WriteLine(Qualificacio(12));
}
```

```text
> No assolit
> Notable
> Matrícula d'honor
> Nota no vàlida
```

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

```csharp
public static string Qualificacio(double nota)
{
    string resultat;
    if (nota < 0 || nota > 10)
    {
        resultat = "Nota no vàlida";
    }
    else if (nota < 5)
    {
        resultat = "No assolit";
    }
    else if (nota < 7)
    {
        resultat = "Aprovat";
    }
    else if (nota < 9)
    {
        resultat = "Notable";
    }
    else if (nota < 10)
    {
        resultat = "Excel·lent";
    }
    else
    {
        resultat = "Matrícula d'honor";
    }
    return resultat;
}
```

</details>

### 📝 Exercici: funció PreuEntrada

Implementa una funció `PreuEntrada` que rebi l'edat d'una persona i retorni el preu de l'entrada de cinema:

| Edat              | Preu   |
|-------------------|--------|
| 4 anys o menys    | Gratis |
| de 5 a 11 anys    | 5 €    |
| 65 anys o més     | 6 €    |
| la resta          | 8 €    |

```csharp
public static void Main(string[] args)
{
    Console.WriteLine($"3 anys: {PreuEntrada(3)} €");
    Console.WriteLine($"9 anys: {PreuEntrada(9)} €");
    Console.WriteLine($"30 anys: {PreuEntrada(30)} €");
    Console.WriteLine($"70 anys: {PreuEntrada(70)} €");
}
```

```text
> 3 anys: 0 €
> 9 anys: 5 €
> 30 anys: 8 €
> 70 anys: 6 €
```

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

```csharp
public static int PreuEntrada(int edat)
{
    int preu;
    if (edat <= 4)
    {
        preu = 0;
    }
    else if (edat < 12)
    {
        preu = 5;
    }
    else if (edat >= 65)
    {
        preu = 6;
    }
    else
    {
        preu = 8;
    }
    return preu;
}
```

</details>

### 📝 Exercici: funció InfoTemperatura

Implementa una funció `InfoTemperatura` que rebi una temperatura en graus (`double`) i retorni un missatge segons aquesta taula:

| Temperatura (°C) | Missatge       |
|------------------|----------------|
| < 0              | Està glaçat    |
| [0, 15)          | Fa fred        |
| [15, 25)         | S'hi està bé   |
| >= 25             | Fa calor       |

> `[0, 15)` vol dir de 0 (inclòs) fins a 15 (no inclòs).

```csharp
public static void Main(string[] args)
{
    Console.WriteLine($"-2,5 °C: {InfoTemperatura(-2.5)}");
    Console.WriteLine($"14,9 °C: {InfoTemperatura(14.9)}");
    Console.WriteLine($"15 °C: {InfoTemperatura(15)}");
    Console.WriteLine($"30 °C: {InfoTemperatura(30)}");
}
```

```text
> -2,5 °C: Està glaçat
> 14,9 °C: Fa fred
> 15 °C: S'hi està bé
> 30 °C: Fa calor
```

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

```csharp
public static string InfoTemperatura(double temperatura)
{
    string missatge;
    if (temperatura < 0)
    {
        missatge = "Està glaçat";
    }
    else if (temperatura < 15)
    {
        missatge = "Fa fred";
    }
    else if (temperatura < 25)
    {
        missatge = "S'hi està bé";
    }
    else
    {
        missatge = "Fa calor";
    }
    return missatge;
}
```

</details>


## Estructura switch

> L'estructura del switch la veurem més endavant quan necessitem fer un menú.

## Estructures aniuades

> Les estructures anuiades les treballarem més endavant conjuntament amb les estructures repetitives.