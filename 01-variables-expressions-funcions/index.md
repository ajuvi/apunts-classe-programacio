---
layout: default
---

# Variables, expressions i funcions

## Variables, tipus i expressions

### 📝 Exercici: repartir caramels
{: .exercici}

Tenim una bossa amb `23 caramels` i volem repartir-los entre `5 persones` de manera que tothom rebi la mateixa quantitat.

Calcula quants caramels rep cada persona i quants en sobren.

```csharp
int caramels = 23;
int persones = 5;

int perPersona = ...;
int sobrants = ...;

Console.WriteLine($"Cada persona rep {perPersona} caramels");
Console.WriteLine($"En sobren {sobrants}");
```

```console
> Cada persona rep 4 caramels
> En sobren 3
```

{: .solucio}
```csharp
int caramels = 23;
int persones = 5;

int perPersona = caramels / persones;
int sobrants = caramels % persones;

Console.WriteLine($"Cada persona rep {perPersona} caramels");
Console.WriteLine($"En sobren {sobrants}");
```

<!-- /exercici -->


### 📝 Exercici: separar una data
{: .exercici}

Tenim una data guardada com un sol número amb el format `YYYYMMDD`. Mostra el dia, el mes i l'any per separat.

```csharp
int data = 20260924;

int any = ...;
int mes = ...;
int dia = ...;

Console.WriteLine($"Dia {dia}, mes {mes}, any {any}");
```

```cmd
> Dia 24, mes 9, any 2026
```

{: .solucio}
```csharp
int data = 20260924;

int any = data / 10000;          // 2026
int mes = data / 100 % 100;      // 9
int dia = data % 100;            // 24

Console.WriteLine($"Dia {dia}, mes {mes}, any {any}");
```

### 📝 Exercici: capgirar un número de 3 xifres
{: .exercici}

Fes un programa que capgiri un número de 3 xifres. Per exemple, `472` → `274`.

```csharp
int numero = 472;

int unitats = ...;
int desenes = ...;
int centenes = ...;

int capgirat = ...;

Console.WriteLine($"El número capgirat és {capgirat}");
```

```console
> El número capgirat és 274
```

{: .solucio}
```csharp
int numero = 472;

int unitats = numero % 10;       // 2
int desenes = numero /10 % 10;   // 7
int centenes = numero /100;      // 4

int capgirat = unitats * 100 + desenes * 10 + centenes;   // 274

Console.WriteLine($"El número capgirat és {capgirat}");
```


<!-- /exercici -->



## Codi ASCII

### 📝 Exercici: obtenir el codi ASCII d'un caràcter
{: .exercici}

Fes un programa que demani un caràcter a l'usuari i mostri el seu codi ASCII.

```csharp
Console.Write("Introdueix un caràcter: ");
char c = Convert.ToChar(Console.ReadLine()!);

int codi = ...;

Console.WriteLine($"El codi ASCII de {c} és {codi}");
```

```cmd
> Introdueix un caràcter: A
> El codi ASCII de A és 65
```

{: .solucio}
```csharp
Console.Write("Introdueix un caràcter: ");
char c = Convert.ToChar(Console.ReadLine()!);

int codi = (int)c;

Console.WriteLine($"El codi ASCII de {c} és {codi}");
```

<!-- /exercici -->



### 📝 Exercici: convertir una lletra minúscula a majúscula
{: .exercici}

Fes un programa que demani una lletra minúscula i mostri la seva lletra majúscula corresponent utilitzant els codis ASCII.

La diferència entre el codi ASCII d'una lletra minúscula i el de la seva majúscula és de `32`.

```csharp
Console.Write("Introdueix una lletra minúscula: ");
char lletra = Convert.ToChar(Console.ReadLine()!);

char majuscula = ...;

Console.WriteLine($"La lletra majúscula és {majuscula}");
```

```cmd
> Introdueix una lletra minúscula: a
> La lletra majúscula és A
```

{: .solucio}
```csharp
Console.Write("Introdueix una lletra minúscula: ");
char lletra = Convert.ToChar(Console.ReadLine()!);

char majuscula = (char)(lletra - 32);

Console.WriteLine($"La lletra majúscula és {majuscula}");
```

<!-- /exercici -->


## Números aleatoris

### 📝 Exercici: notes aleatòries
{: .exercici}

Fes un programa que generi **dues notes aleatòries** entre `0` i `10` i mostri les notes i la **mitjana**.

```csharp
Random rnd = new Random();

int nota1 = ...;
int nota2 = ...;

double mitjana = ...;

Console.WriteLine($"Nota 1: {nota1}");
Console.WriteLine($"Nota 2: {nota2}");
Console.WriteLine($"Mitjana: {mitjana}");
```

```cmd
> Nota 1: 6
> Nota 2: 9
> Mitjana: 7.5
```

{: .solucio}
```csharp
Random rnd = new Random();

int nota1 = rnd.Next(0, 11);
int nota2 = rnd.Next(0, 11);

double mitjana = (nota1 + nota2) / 2.0;

Console.WriteLine($"Nota 1: {nota1}");
Console.WriteLine($"Nota 2: {nota2}");
Console.WriteLine($"Mitjana: {mitjana}");
```

> Dividim per `2.0` i no per `2` perquè la divisió no sigui entera.


<!-- /exercici -->


### 📝 Exercici: matrícula aleatòria
{: .exercici}

Fes un programa que generi una **matrícula de cotxe aleatòria** i la mostri. El format de la matrícula ha de ser `0000 AAA`:

- 4 dígits (de `0` a `9`)
- un espai
- 3 lletres majúscules (de `A` a `Z`)

```cmd
> La teva matrícula és: 4821 BKM
```

{: .solucio}
```csharp
Random rand = new Random();

// 4 dígits
numero = rand.Next(0, 10000);

// 3 lletres
char  c1 = (char)rand.Next('A', 'Z' + 1);
char  c2 = (char)rand.Next('A', 'Z' + 1);
char  c3 = (char)rand.Next('A', 'Z' + 1);

Console.WriteLine($"La teva matrícula és: {numero:0000} {c1}{c2}{c3}");
```


<!-- /exercici -->


## Funcions

### 📝 Exercici: quin resultat donarà?
{: .exercici}

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

> En aquest exemple utilitzem la funció `Max` de la llibreria `Math`.

{: .solucio}
```cmd
> 30
```


<!-- /exercici -->


### 📝 Exercici: funció Doblar
{: .exercici}

Implementa una funció `Doblar` que rebi un número enter i retorni el seu doble. Fes-la servir des del `Main` per mostrar el doble de `4`.

```csharp
public static void Main(string[] args)
{
    int x = Doblar(4);
    Console.WriteLine($"El doble de 4 és {x}");
}
```

```cmd
> El doble de 4 és 8
```

{: .solucio}
```csharp
public static int Doblar(int n)
{
    int resultat;
    resultat = n * 2;
    return resultat;
}

```

<!-- /exercici -->


### 📝 Exercici: funció GenerarMatricula
{: .exercici}

Implementa una funció `GenerarMatricula` que **no rebi cap paràmetre** i retorni una matrícula aleatòria amb el format `0000 AAA`. Fes-la servir des del `Main` per mostrar dues matrícules.

```csharp
public static void Main(string[] args)
{
    Console.WriteLine($"Matrícula 1: {GenerarMatricula()}");
    Console.WriteLine($"Matrícula 2: {GenerarMatricula()}");
}
```

```cmd
> Matrícula 1: 4821 BKM
> Matrícula 2: 0375 ZTA
```

{: .solucio}
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


<!-- /exercici -->


### 📝 Exercici: funció CalcularIntensitat
{: .exercici}

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
```cmd
> Voltatge: 12
> Resistència: 4
> Intensitat: 3
```

{: .solucio}
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


<!-- /exercici -->

