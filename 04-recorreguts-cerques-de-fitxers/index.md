---
layout: default
---

# Recorreguts de fitxers

## Recorreguts amb while

### Cada element és una línia
{: .grup}

#### 📝 Exercici: suma dels números (MF=null)
{: .exercici}

Fes un programa que llegeixi el fitxer [**numeros.txt**](numeros.txt){: .popup-fitxer} i escrigui la suma de tots els números fins a la marca de fi sigui null.

```console
> Suma: 96
```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    const string MARCA_FI = null;
    const string NOM_FITXER = "numeros.txt";

    int suma = 0;

   // obrim el fitxer i llegim el primer número
    StreamReader fitxer = new StreamReader(NOM_FITXER);
    string linia = fitxer.ReadLine();
    while (linia != MARCA_FI)
    {
        // tractament
        suma = suma + Convert.ToInt32(linia);

        // llegir la seqüent línia
        linia = fitxer.ReadLine();
    }
    fitxer.Close();

    // tractament final
    Console.WriteLine($"Suma: {suma}");
}
```

<!-- /exercici -->

#### 📝 Exercici: comptar números grans (MF=null)
{: .exercici}

Fes un programa que llegeixi **tot** el fitxer [**numeros.txt**](numeros.txt){: .popup-fitxer} i compti quants números són més grans que 5. En aquest cas la `MARCA_FI` ha de ser `null`.

```console
> Més grans que 5: 4
```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    const string MARCA_FI = null;
    const string NOM_FITXER = "numeros.txt";
    int comptador = 0;

    StreamReader fitxer = new StreamReader(NOM_FITXER);
    string linia = fitxer.ReadLine();
    while (linia != MARCA_FI)
    {
        int num = Convert.ToInt32(linia);
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

<!-- /exercici -->

#### 📝 Exercici: mínim i màxim (MF=null)
{: .exercici}

Fes un programa que llegeixi el fitxer [**numeros.txt**](numeros.txt){: .popup-fitxer} i calculi el número més petit i el més gran. La primera línia del fitxer indica quants números hi ha.

```console
> Mínim: 5
> Màxim: 42
```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    const string MARCA_FI = null;
    const string NOM_FITXER = "numeros.txt";

    StreamReader fitxer = new StreamReader(NOM_FITXER);

    int minim = 0;
    int maxim = 0;
    bool primer = true;

    string linia = fitxer.ReadLine();

    while (linia != MARCA_FI)
    {
        int num = Convert.ToInt32(linia);

        if (primer)
        {
            minim = num;
            maxim = num;
            primer = false;
        }
        else
        {
            if (num < minim)
            {
                minim = num;
            }

            if (num > maxim)
            {
                maxim = num;
            }
        }

        linia = fitxer.ReadLine();
    }

    fitxer.Close();

    if (!primer)
    {
        Console.WriteLine($"Mínim: {minim}");
        Console.WriteLine($"Màxim: {maxim}");
    }
    else
    {
        Console.WriteLine("El fitxer és buit.");
    }
}
```

<!-- /exercici -->

#### 📝 Exercici: comptar notes aprovades (MF=-1)
{: .exercici}

Fes un programa que llegeixi les notes del fitxer [**notes.txt**](notes.txt){: .popup-fitxer} i compti quantes són iguals o superiors a 5. La lectura ha de finalitzar quan es trobi el valor `-1`.

```console
> Notes aprovades: 4
```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    const int MARCA_FI = -1;
    const string NOM_FITXER = "notes.txt";

    int comptador = 0;

    // Obrim el fitxer i llegim la primera nota
    StreamReader fitxer = new StreamReader(NOM_FITXER);
    int nota = Convert.ToInt32(fitxer.ReadLine());

    while (nota != MARCA_FI)
    {
        // Tractament
        if (nota >= 5)
        {
            comptador = comptador + 1;
        }

        // Llegir la següent nota
        nota = Convert.ToInt32(fitxer.ReadLine());
    }

    fitxer.Close();

    // Tractament final
    Console.WriteLine($"Notes aprovades: {comptador}");
}
```

<!-- /exercici -->


### Cada element són dues línies
{: .grup}

#### 📝 Exercici: nom aprovats (MF=null)
{: .exercici}

Fes un programa que llegeixi el fitxer [**alumnes.txt**](alumnes.txt){: .popup-fitxer} i escrigui només el nom dels alumnes aprovats (nota 5 o més). Llegir totes les línies del fitxer.

```console
> Anna
> Marta
```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    const string MARCA_FI = null;
    const string NOM_FITXER = "alumnes.txt";

    StreamReader fitxer = new StreamReader(NOM_FITXER);
    string nom = fitxer.ReadLine();
    while (nom != MARCA_FI)
    {
        int nota = Convert.ToInt32(fitxer.ReadLine());
        if (nota >= 5)
        {
            Console.WriteLine(nom);
        }

        nom = fitxer.ReadLine();
    }
    fitxer.Close();
}
```

<!-- /exercici -->

#### 📝 Exercici: mitjana de les notes (MF=null)
{: .exercici}

Fes un programa que llegeixi el fitxer [**alumnes.txt**](alumnes.txt){: .popup-fitxer} i calculi la mitjana de les notes de tots els alumnes.

```console
> Mitjana: 6,67
```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    const string MARCA_FI = null;
    const string NOM_FITXER = "notes.txt";

    int alumnes = 0;
    int suma = 0;

    // obrim el fitxer i llegim el primer nom
    StreamReader fitxer = new StreamReader(NOM_FITXER);
    string nom = fitxer.ReadLine();

    // mentre no trobem la marca
    while (nom != MARCA_FI)
    {
        // llegim la segona línia: la nota
        int nota = Convert.ToInt32(fitxer.ReadLine());

        // tractament
        alumnes = alumnes + 1;
        suma = suma + nota;

        // llegir el següent nom
        nom = fitxer.ReadLine();
    }

    // tanquem el fitxer
    fitxer.Close();

    // tractament final
    if(alumnes==0){
        Console.WriteLine("No hi ha cap alumne en el fitxer");
    } else {
        double mitjana = (double)suma / alumnes;
        Console.WriteLine($"Mitjana: {mitjana:0.00}");        
    }

}
```

<!-- /exercici -->

### Cada elements són quatre línies
{: .grup}

#### 📝 Exercici: consultar llibres (MF=null)
{: .exercici}

Fes un programa que llegeixi el fitxer [**llibres.txt**](llibres.txt){: .popup-fitxer} i compti quants llibres tenen més de 300 pàgines.

Cada llibre ocupa 4 línies:
1. Títol
2. Autor
3. Any de publicació
4. Nombre de pàgines

```console
> Llibres amb més de 300 pàgines: 2

```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    const string NOM_FITXER = "llibres.txt";

    int comptador = 0;

    // Obrir el titol del primer llibre (o null)
    StreamReader fitxer = new StreamReader(NOM_FITXER);
    string titol = fitxer.ReadLine();

    while (titol != null)
    {
        string autor = fitxer.ReadLine();
        int any = Convert.ToInt32(fitxer.ReadLine());
        int pagines = Convert.ToInt32(fitxer.ReadLine());

        if (pagines > 300)
        {
            comptador = comptador + 1;
        }

        // Llegir el títol del següent llibre
        titol = fitxer.ReadLine();
    }

    fitxer.Close();

    Console.WriteLine($"Llibres amb més de 300 pàgines: {comptador}");
}
```

<!-- /exercici -->

## Recorreguts amb for

### Cada element és una línia
{: .grup}

#### 📝 Exercici: suma dels números
{: .exercici}

Fes un programa que llegeixi el fitxer [**numeros2.txt**](numeros2.txt){: .popup-fitxer} i calculi la suma de tots els números.

La **primera línia del fitxer** indica quants números hi ha. A continuació, cada línia conté un número.

```console
> Suma: 96
```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    const string NOM_FITXER = "numeros2.txt";

    StreamReader fitxer = new StreamReader(NOM_FITXER);

    int quantitat = Convert.ToInt32(fitxer.ReadLine());
    int suma = 0;

    for (int i = 0; i < quantitat; i++)
    {
        int num = Convert.ToInt32(fitxer.ReadLine());
        suma = suma + num;
    }

    fitxer.Close();

    Console.WriteLine($"Suma: {suma}");
}
```

#### 📝 Exercici: comptar números grans
{: .exercici}

Fes un programa que llegeixi el fitxer  [**numeros2.txt**](numeros2.txt){: .popup-fitxer} i compti quants números són més grans que 5.

La **primera línia del fitxer** indica quants números hi ha. A continuació, cada línia conté un número.

```console
> Més grans que 5: 4
```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    const string NOM_FITXER = "numeros2.txt";

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

<!-- /exercici -->


#### 📝 Exercici: calcular el mínim i el màxim
{: .exercici}

Fes un programa que llegeixi el fitxer [**numeros2.txt**](numeros2.txt){: .popup-fitxer} i calculi el número més petit i el més gran.

La **primera línia del fitxer** indica quants números hi ha. A continuació, cada línia conté un número.

```console
> Mínim: 1
> Màxim: 9
```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    const string NOM_FITXER = "numeros2.txt";

    StreamReader fitxer = new StreamReader(NOM_FITXER);

    int quantitat = Convert.ToInt32(fitxer.ReadLine());

    int minim = 0;
    int maxim = 0;

    for (int i = 0; i < quantitat; i++)
    {
        int num = Convert.ToInt32(fitxer.ReadLine());

        if (i == 0)
        {
            minim = num;
            maxim = num;
        }
        else
        {
            if (num < minim)
            {
                minim = num;
            }

            if (num > maxim)
            {
                maxim = num;
            }
        }
    }

    fitxer.Close();

    if(quantitat == 0){
        Console.WriteLine("El fitxer no conté números.");
    } 
    else 
    {
        Console.WriteLine($"Mínim: {minim}");
        Console.WriteLine($"Màxim: {maxim}");
    }
}
```

<!-- /exercici -->


### Cada element són dues línies
{: .grup}

#### 📝 Exercici: nom aprovats
{: .exercici}

Fes un programa que llegeixi el fitxer  [**alumnes2.txt**](alumnes2.txt){: .popup-fitxer} i escrigui només el nom dels alumnes aprovats (nota 5 o més).

La **primera línia del fitxer** indica quants alumnes hi ha. A continuació, cada alumne ocupa dues línies:
1. Nom de l'alumne.
2. Nota de l'alumne.

```console
> Anna
> Marta
```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    const string NOM_FITXER = "alumnes2.txt";

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

<!-- /exercici -->

#### 📝 Exercici: mitjana de les notes
{: .exercici}

Fes un programa que llegeixi el fitxer [**alumnes2.txt**](alumnes2.txt){: .popup-fitxer} i calculi la mitjana de les notes de tots els alumnes.

La **primera línia del fitxer** indica quants alumnes hi ha. A continuació, cada alumne ocupa dues línies:
1. Nom de l'alumne.
2. Nota de l'alumne.

```console
> Mitjana: 6,67
```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    const string NOM_FITXER = "alumnes2.txt";
    int quantitat;
    int suma = 0;

    // obrim el fitxer i llegim quants alumnes hi ha
    StreamReader fitxer = new StreamReader(NOM_FITXER);
    quantitat = Convert.ToInt32(fitxer.ReadLine());

    for (int i = 0; i < quantitat; i++)
    {
        // llegir les dues línies de l'alumne
        fitxer.ReadLine();
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

<!-- /exercici -->

### Cada element són quatre línies
{: .grup}

#### 📝 Exercici: llibres amb més de 300 pàgines
{: .exercici}

Fes un programa que llegeixi el fitxer [**llibres2.txt**](llibres2.txt){: .popup-fitxer} i compti quants llibres tenen més de 300 pàgines.

La **primera línia del fitxer** indica quants llibres hi ha. A continuació, cada llibre ocupa quatre línies:
1. Títol del llibre.
2. Autor.
3. Any de publicació.
4. Nombre de pàgines.

```console
> Llibres amb més de 300 pàgines: 2
```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    const string NOM_FITXER = "llibres2.txt";

    StreamReader fitxer = new StreamReader(NOM_FITXER);

    int quantitat = Convert.ToInt32(fitxer.ReadLine());
    int comptador = 0;

    for (int i = 0; i < quantitat; i++)
    {
        string titol = fitxer.ReadLine();
        string autor = fitxer.ReadLine();
        int any = Convert.ToInt32(fitxer.ReadLine());
        int pagines = Convert.ToInt32(fitxer.ReadLine());

        if (pagines > 300)
        {
            comptador++;
        }
    }

    fitxer.Close();

    Console.WriteLine($"Llibres amb més de 300 pàgines: {comptador}");
}
```

<!-- /exercici -->


## Cerques amb while

### Cada element és una línia
{: .grup}


#### 📝 Exercici: primer múltiple de 7 (MF=null)
{: .exercici}

Fes un programa que llegeixi el fitxer [**numeros3.txt**](numeros3.txt){: .popup-fitxer} i trobi el `primer múltiple de 7 i la seva posició`. El fitxer acaba amb null.

```console
> Primer múltiple de 7: 35 (posició 5)
```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    const string MARCA_FI = null;
    const string NOM_FITXER = "numeros3.txt";

    int posicio = 0;
    bool trobat = false;

    StreamReader sr = new StreamReader(NOM_FITXER);
    string linia = sr.ReadLine();

    while (linia != MARCA_FI && !trobat)
    {
        int num = Convert.ToInt32(linia);

        posicio = posicio + 1;

        if (num % 7 == 0)
        {
            trobat = true;
        }
        else
        {
            linia = sr.ReadLine();
        }
    }
    sr.Close();

    if (trobat)
    {
        Console.WriteLine($"Primer múltiple de 7: {num} (posició {posicio})");
    }
    else
    {
        Console.WriteLine("No hi ha cap múltiple de 7");
    }
}
```

<!-- /exercici -->

#### 📝 Exercici: hi ha algun suspès? (MF=-1)
{: .exercici}

Fes un programa que llegeixi el fitxer [notes3.txt](notes3.txt){: .popup-fitxer} i digui `la posició i el valor de la primera nota suspesa` (menys de 5). Si no n'hi ha cap, ha d'escriure No hi ha cap suspès.

```console
> Primer suspès a la posició 4: 3
```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    const string MARCA_FI = null;
    const string NOM_FITXER = "notes3.txt";

    int posicio = 0;
    bool trobat = false;

    StreamReader sr = new StreamReader(NOM_FITXER);
    int nota = Convert.ToInt32(sr.ReadLine());

    while (nota != MARCA_FI && !trobat)
    {
        posicio = posicio + 1;

        if (nota < 5)
        {
            trobat = true;
        }
        else
        {
            nota = Convert.ToInt32(sr.ReadLine());
        }
    }
    sr.Close();

    if (trobat)
    {
        Console.WriteLine($"Primer suspès a la posició {posicio}: {nota}");
    }
    else
    {
        Console.WriteLine("No hi ha cap suspès");
    }
}
```

<!-- /exercici -->

### Cada element són dues línies
{: .grup}


#### 📝 Exercici: buscar la nota d'un alumne (MF=null)
{: .exercici}

Fes un programa que llegeixi el fitxer [alumnes3.txt](alumnes3.txt){: .popup-fitxer} i escrigui la nota de l'alumne que es diu Marta. Si no hi és, ha d'escriure No s'ha trobat l'alumne.

Cada alumne ocupa dues línies:

1. Nom de l'alumne.
2. Nota de l'alumne.

```console
> La nota de Marta és 9
```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    const string MARCA_FI = null;
    const string NOM_FITXER = "alumnes-cerca.txt";
    const string NOM_BUSCAT = "Marta";

    int nota = 0;
    bool trobat = false;

    StreamReader sr = new StreamReader(NOM_FITXER);
    string nom = sr.ReadLine();

    while (nom != MARCA_FI && !trobat)
    {
        // llegir la resta de l'element
        nota = Convert.ToInt32(sr.ReadLine());

        if (nom == NOM_BUSCAT)
        {
            trobat = true;
        }
        else
        {
            nom = sr.ReadLine();
        }
    }
    sr.Close();

    if (trobat)
    {
        Console.WriteLine($"La nota de {NOM_BUSCAT} és {nota}");
    }
    else
    {
        Console.WriteLine("No s'ha trobat l'alumne");
    }
}
```

<!-- /exercici -->

### Cada element són quatre línies
{: .grup}


#### 📝 Exercici: primer llibre llarg (MF=null)
{: .exercici}

Fes un programa que llegeixi el fitxer [llibres3.txt](llibres3.txt){: .popup-fitxer} i escrigui `el títol i l'autor del primer llibre de més de 400 pàgines`.

Cada llibre ocupa 4 línies:

1. Títol
2. Autor
3. Any de publicació
4. Nombre de pàgines

```console
> Primer llibre de més de 400 pàgines: Mirall trencat (Mercè Rodoreda)
```

{: .solucio}

```csharp
public static void Main(string[] args)
{
    const string MARCA_FI = null;
    const string NOM_FITXER = "llibres-cerca.txt";
    const int PAGINES_MIN = 400;

    string autor = "";
    bool trobat = false;

    StreamReader sr = new StreamReader(NOM_FITXER);
    string titol = sr.ReadLine();

    while (titol != MARCA_FI && !trobat)
    {
        // llegir la resta de l'element
        autor = sr.ReadLine();
        sr.ReadLine(); //any
        int pagines = Convert.ToInt32(sr.ReadLine());

        if (pagines > PAGINES_MIN)
        {
            trobat = true;
        }
        else
        {
            titol = sr.ReadLine();
        }
    }
    sr.Close();

    if (trobat)
    {
        Console.WriteLine($"Primer llibre de més de {PAGINES_MIN} pàgines: {titol} ({autor})");
    }
    else
    {
        Console.WriteLine($"No hi ha cap llibre de més de {PAGINES_MIN} pàgines");
    }
}
```
