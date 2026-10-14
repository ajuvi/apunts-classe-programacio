---
layout: default
---

# Estructures repetitives

Fins ara, cada instrucció s'executava com a molt una vegada. Amb les **estructures repetitives**, el programa pot **repetir un bloc d'instruccions** mentre es compleixi una **condició**.

## Estructura while

El `while` comprova la condició **al principi**. Si és certa, executa el bloc i torna a comprovar la condició. Quan és falsa, surt del bucle i el programa continua.

<img src="while.png" alt="Ordinograma de l'estructura while" width="180">

```csharp
while (condicio)
{
    // instruccions que es repeteixen mentre la condició és certa
}
```

Un `while` sol tenir tres parts:

1. **Inicialització**: donem un valor inicial a la variable que controla el bucle (`x = 1`).
2. **Condició**: diu fins quan es repeteix (`x <= n`).
3. **Actualització**: dins el bucle, canviem la variable perquè algun dia la condició sigui falsa (`x = x + 1`).

Exemple: programa que escriu els nombres de l'1 al 5 i el seu quadrat (és el programa de l'ordinograma).

```csharp
public static void Main(string[] args)
{
    int x = 1;

    while (x <= 5)
    {
        Console.WriteLine($"{x} {x * x}");
        x = x + 1;
    }
}
```

```text
> 1 1
> 2 4
> 3 9
> 4 16
> 5 25
```

### 📝 Exercici: quin és el resultat?

Digues què escriu cadascun d'aquests bucles. Compte, que no tots funcionen com sembla!

<style>
.bucles {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1em;
}
.bucles > div {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0.5em 1em;
}
.bucles pre {
  min-height: 11em;
  overflow-x: auto;
}
@media (max-width: 600px) {
  .bucles { grid-template-columns: 1fr; }
}
</style>

<div class="bucles">

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

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

```text
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

</details>

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

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

```text
> ITERACIÓ 0
> ITERACIÓ 0
> ITERACIÓ 0
> ITERACIÓ 0
> ...
```

**Bucle infinit**: falta `i = i + 1` i `i` no canvia mai.

</details>

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

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

```text
 
```

No escriu res: la condició ja és falsa al principi i **no entra mai**.

</details>

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

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

```text
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

</details>

</div>

</div>

### 📝 Exercici: escriure de l'1 al N

Fes un programa que, donat un nombre `N` (per exemple, 4), escrigui els nombres de l'1 al `N`.

```text
> 1 2 3 4
```

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

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

</details>

### 📝 Exercici: taula de multiplicar

Fes un programa que, donat un nombre (per exemple, 7), escrigui la seva taula de multiplicar (de l'1 al 10).

```text
> 7 x 1 = 7
> 7 x 2 = 14
> ...
> 7 x 10 = 70
```

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

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

</details>

### 📝 Exercici: suma de l'1 al N

Fes un programa que, donat un nombre `N` (per exemple, 4), calculi i escrigui la suma de l'1 al `N`: 1 + 2 + 3 + 4 = 10.


```text
> Suma fins a 4: 10
```

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

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
    Console.WriteLine($"Suma fins a {n}: {suma}");
}
```

</details>

### 📝 Exercici: compte enrere

Fes un programa que faci un compte enrere del 5 a l'1 i, al final, escrigui `Enlairament!`.

```text
> 5
> 4
> 3
> 2
> 1
> Enlairament!
```

<details markdown="1">
<summary markdown="span">Mostra la solució</summary>

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

</details>
