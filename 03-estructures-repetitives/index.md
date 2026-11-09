---
layout: default
---

# Estructures repetitives

## Estructura while

### 📝 Exercici: quin és el resultat?
{: .exercici}

Digues què escriu cadascun d'aquests bucles. Compte, que no tots funcionen com sembla!

<div class="graella graella-2">

<div markdown="1">

**Bucle 1**

```csharp
int i = 0;

while (i < 10)
{
    Console.WriteLine($"ITERACIÓ {i}");
    i = i + 1;
}
```

{: .solucio}
```console
> ITERACIÓ 0
> ITERACIÓ 1
> ITERACIÓ 2
> ITERACIÓ 3
> ITERACIÓ 4
> ITERACIÓ 5
> ITERACIÓ 6
> ITERACIÓ 7
> ITERACIÓ 8
> ITERACIÓ 9
```

</div>

<div markdown="1">

**Bucle 2**

```csharp
int i = 0;

while (i < 10)
{
    Console.WriteLine($"ITERACIÓ {i}");
}

```

{: .solucio}
```console
> ITERACIÓ 0
> ITERACIÓ 0
> ITERACIÓ 0
> ITERACIÓ 0
> ...
```

**Bucle infinit**: falta `i = i + 1` i `i` no canvia mai.

</div>

<div markdown="1">

**Bucle 3**

```csharp
int i = 20;

while (i < 10)
{
    Console.WriteLine($"ITERACIÓ {i}");
    i = i + 1;
}
```

{: .solucio}
No escriu res: la condició ja és falsa al principi i **no entra mai**.

</div>

<div markdown="1">

**Bucle 4**

```csharp
int i = 10;

while (i > 0)
{
    Console.WriteLine($"ITERACIÓ {i}");
    i = i - 1;
}
```

{: .solucio}
```console
> ITERACIÓ 10
> ITERACIÓ 9
> ITERACIÓ 8
> ITERACIÓ 7
> ITERACIÓ 6
> ITERACIÓ 5
> ITERACIÓ 4
> ITERACIÓ 3
> ITERACIÓ 2
> ITERACIÓ 1
```

La variable **baixa**: comença a 10 i resta 1 a cada volta. Fa 10 voltes, igual que el bucle 1, però en ordre invers.

</div>

</div>

<!-- /exercici -->

### 📝 Exercici: escriure de l'1 al N
{: .exercici}

Fes un programa que, donat un nombre `N` (per exemple, 4), escrigui els nombres de l'1 al `N`.

```console
> 1 2 3 4
```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    const int N = 4;
    int i = 1;

    while (i <= N)
    {
        Console.Write(i + " ");
        i = i + 1;
    }
}
```

<!-- /exercici -->

### 📝 Exercici: suma de l'1 al N
{: .exercici}

Fes un programa que, donat un nombre `N` (per exemple, 4), calculi i escrigui la suma de l'1 al `N`: 1 + 2 + 3 + 4 = 10.


```console
> Suma fins a 4: 10
```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    const int N = 4;
    int suma = 0;
    int i = 1;

    while (i <= N)
    {
        suma = suma + i;
        i = i + 1;
    }
    Console.WriteLine($"Suma fins a {N}: {suma}");
}
```

<!-- /exercici -->

### 📝 Exercici: taula de multiplicar
{: .exercici}

Fes un programa que, donat un nombre (per exemple, 7), escrigui la seva taula de multiplicar (de l'1 al 10).

```console
> 7 x 1 = 7
> 7 x 2 = 14
> ...
> 7 x 10 = 70
```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    const int MAX = 10;
    int taula = 7;
    int i = 1;

    while (i <= MAX)
    {
        Console.WriteLine($"{taula} x {i} = {taula * i}");
        i = i + 1;
    }
}
```

<!-- /exercici -->

### 📝 Exercici: compte enrere
{: .exercici}

Fes un programa que faci un compte enrere del 5 a l'1 i, al final, escrigui `Enlairament!`.

```console
> 5
> 4
> 3
> 2
> 1
> Enlairament!
```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    int compte = 5;

    while (compte > 0)
    {
        Console.WriteLine(compte);
        compte = compte - 1;
    }
    Console.WriteLine("Enlairament!");
}
```

<!-- /exercici -->


## Exercicis for

### 📝 Exercici: quin és el resultat?
{: .exercici}

Digues què escriu cadascun d'aquests bucles.

<div class="graella graella-2">

<div markdown="1">

**Bucle 1**

```csharp
for (int i = 0; i < 5; i++)
{
    Console.Write($"{i} ");
}
```

{: .solucio}

```console
> 0 1 2 3 4
```

Comença a 0 i s'atura abans del 5: **5 voltes**.


</div>

<div markdown="1">

**Bucle 2**

```csharp
for (int i = 1; i <= 10; i = i + 2)
{
    Console.Write($"{i} ");
}
```

{: .solucio}

```console
> 1 3 5 7 9
```

Suma **2** a cada volta.


</div>

<div markdown="1">

**Bucle 3**

```csharp
for (int i = 5; i > 0; i--)
{
    Console.Write($"{i} ");
}
```

{: .solucio}

```console
> 5 4 3 2 1
```

La variable **baixa** a cada volta.


</div>

<div markdown="1">

**Bucle 4**

```csharp
for (int i = 10; i < 5; i++)
{
    Console.Write($"{i} ");
}
```

{: .solucio}
No escriu res: la condició ja és falsa al principi i **no entra mai**.


</div>

</div>

<!-- /exercici -->

### 📝 Exercici: nombres parells
{: .exercici}

Fes un programa que escrigui els 10 primers nombres parells.

```console
> 2 4 6 8 10 12 14 16 18 20
```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    const int N = 10;

    for (int i = 1; i <= N; i++)
    {
        Console.Write($"{2 * i} ");
    }
}
```

<!-- /exercici -->

### 📝 Exercici: producte de l'1 al N
{: .exercici}

Fes un programa que, donat un nombre `N` (per exemple, 4), calculi el producte de l'1 al `N`: 1 · 2 · 3 · 4 = 24.

> Pista: com a la suma, però la variable `producte` ha de començar a **1**, no a 0.

```console
> Producte fins a 4: 24
```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    const int N = 4;
    int producte = 1;

    for (int i = 1; i <= N; i++)
    {
        producte = producte * i;
    }
    Console.WriteLine($"Producte fins a {N}: {producte}");
}
```

<!-- /exercici -->


### 📝 Exercici: rectangle d'asteriscs
{: .exercici}

Fes un programa que dibuixi un rectangle d'asteriscs de 5 d'amplada i 3 d'alçada.

> Pista: un `for` per a les files i, **a dins**, un altre `for` per escriure els asteriscs de cada fila.

```console
> *****
> *****
> *****
```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    const char CARACTER = '*';
    const int AMPLADA = 5;
    const int ALCADA = 3;

    for (int i = 0; i < ALCADA; i++)
    {
        for (int j = 0; j < AMPLADA; j++)
        {
            Console.Write(CARACTER);
        }
        Console.WriteLine();
    }
}
```

<!-- /exercici -->