---
layout: default
---

> Pots accedir al següent enllaç on s'explica de manera visual què és una funció.  
> [https://canva.link/p4g78nhmggbmiop](https://canva.link/p4g78nhmggbmiop)

# Funcions

## Què és una funció?

Una funció és un **bloc de codi amb un nom** que fa una tasca concreta.

Una funció **rep uns paràmetres** (pot tenir-ne diversos o cap) i **sempre retorna un valor**.

<img src="image.png" alt="Funció Max" width="400">

## Implementar una funció

Exemple d'una funció `Max` que rep dos `double` i retorna el més gran.

<img src="image-1.png" alt="Funció Max" width="400">

```csharp
public static double Max(double n1, double n2)
{
    double maxim;
    maxim = n1;
    if (n2 > n1)
    {
        maxim = n2;
    }
    return maxim;
}
```

El nom de les funcions en C# s'escriu en **PascalCase**: com el *camelCase*, però amb la primera lletra també en majúscula.

Exemples de noms de funcions:  
* Max
* Min
* AreaCercle
* VolumEsfera

## Comentar les funcions

Les funcions s'han de comentar perquè el programador sàpiga com utilitzar-les correctament.

```csharp
/// <summary>
/// Retorna el valor màxim entre dos nombres de tipus double.
/// </summary>
/// <param name="n1">El primer nombre a comparar.</param>
/// <param name="n2">El segon nombre a comparar.</param>
/// <returns>El nombre més gran entre n1 i n2.</returns>
public static double Max(double n1, double n2)
{
    ...
}
```

> Si escrius `///` just a sobre d'una funció, Visual Studio genera automàticament l'estructura del comentari.

## La funció com una caixa negra

Un cop implementada i comentada, una funció es pot utilitzar **sense conèixer els detalls interns**: només cal saber els pràmetres què rep i què retorna.

<img src="caixa-negra.png" alt="Caixa negra: entrada → funció → sortida" width="400">

## Crida a una funció (utilitzar una funció) 

### Amb valor literals

En aquest cas, la funció retorna un valor i aquest valor es mostra a pantalla.

```csharp
public static void Main(string[] args)
{
    Console.WriteLine(Max(2, 5));
}
```

```text
> 5
```

### Guardant el resultat en una variable

La funció retorna un valor i aquest es guarda en una variable.

```csharp
public static void Main(string[] args)
{
    double a, b, c;
    a = 10;
    b = 9;
    c = Max(b, a);
    Console.WriteLine(c);
}
```

```text
> 10
```

### Amb expressions com a paràmetres

La funció rep valors que previament s'han de calcular.

```csharp
public static void Main(string[] args)
{
    double a, b;
    a = 10;
    b = 9;
    Console.WriteLine(Max(a, b + 2));
}
```

```text
> 11
```

### Funcions dins de funcions

El resultat d'una funció es pot fer servir com a paràmetre d'una altra.

```csharp
public static void Main(string[] args)
{
    double a, b, c;
    a = 5;
    b = 6;
    c = 7;
    Console.WriteLine(Max(Max(a, b), c));
}
```

```text
> 7
```

### 📝 Exercici: quin resultat donarà?

```csharp
public static void Main(string[] args)
{
    double a, b, c;
    a = 5;
    b = 6;
    c = -200;
    c = Math.Max(Math.Max(Math.Max(a, b) * 5, c), 29);
    Console.WriteLine(c);
}
```

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

```text
> 30
```

</details>

### 📝 Exercici: funció Doblar

Implementa una funció `Doblar` que rebi un número enter i retorni el seu doble. Fes-la servir des del `Main` per mostrar el doble de `4`.

```csharp
public static void Main(string[] args)
{
    int x = Doblar(4);
    Console.WriteLine($"El doble de 4 és {x}");
}
```

```text
> El doble de 4 és 8
```

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

```csharp
public static int Doblar(int n)
{
    int resultat;
    resultat = n * 2;
    return resultat;
}

```
</details>

### 📝 Exercici: funció GenerarMatricula

Implementa una funció `GenerarMatricula` que **no rebi cap paràmetre** i retorni una matrícula aleatòria amb el format `0000 AAA`. Fes-la servir des del `Main` per mostrar dues matrícules.

```csharp
public static void Main(string[] args)
{
    Console.WriteLine($"Matrícula 1: {GenerarMatricula()}");
    Console.WriteLine($"Matrícula 2: {GenerarMatricula()}");
}
```

```text
> Matrícula 1: 4821 BKM
> Matrícula 2: 0375 ZTA
```

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

```csharp
public static string GenerarMatricula()
{
    Random rnd = new Random();

    string matricula = "";

    int numero = rnd.Next(0, 10000);
    char c1 = (char)rnd.Next('A', 'Z' + 1);
    char c2 = (char)rnd.Next('A', 'Z' + 1);
    char c3 = (char)rnd.Next('A', 'Z' + 1);

    matricula = $"{numero:0000} {c1}{c2}{c3}";
    return matricula;
}
```

</details>

### 📝 Exercici: funció CalcularIntensitat

La **llei d'Ohm** diu que la intensitat d'un circuit elèctric és el voltatge dividit per la resistència:


```text
I = V / R
```
Implementa una funció `CalcularIntensitat` que rebi el voltatge i la resistència i retorni la intensitat.

```csharp
public static void Main(string[] args)
{
    double v = 12;
    double r = 4;

    double i = CalcularIntensitat(v, r);

    Console.WriteLine($"Voltatge: {v}");
    Console.WriteLine($"Resistència: {r}");
    Console.WriteLine($"Intensitat: {i}");
}
```
```text
> Voltatge: 12
> Resistència: 4
> Intensitat: 3
```

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

```csharp
/// <summary>
/// Calcula la intensitat d'un circuit amb la llei d'Ohm.
/// </summary>
/// <param name="voltatge">El voltatge en volts (V).</param>
/// <param name="resistencia">La resistència en ohms (Ω).</param>
/// <returns>La intensitat en ampers (A).</returns>
public static double CalcularIntensitat(double voltatge, double resistencia)
{
    double intensitat;
    intensitat = voltatge / resistencia;
    return intensitat;
}

```

</details>