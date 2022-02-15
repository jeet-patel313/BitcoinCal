/* 
#include<Math.h>
double AttackerSuccessProbability(double q, int z) 
{
    double p = 1.0 - q;
    double lamba = z * (q/p);
    double sum = 1.0;
    int i, k;
    for (k=0; k<=z; k++) 
    {
        double poisson = exp(-lambda);
        for (i=1; i<=k; i++)
            poisson *= lambda / i;
        sum -= poisson * (1 - pow(q/p, z-k));
    }
    return sum;
} 
*/

function AttackerSuccessProbability(q, z) {
    let p = 1.0 - q;
    let lambda = z * (q/p);
    let sum = 1.0;
    let i, k;
    for(k=0; k<=z; k++){
        let poisson = Math.E ** (-lambda); // Math.E(-lambda)
        for(i=1; i<=k; i++)
            poisson *= lambda/i;
        sum -= poisson * (1- ((q/p) ** (z-k))) ;
    }
    console.log(`q=${q} z=${z} ==> P=${sum}`);
}

AttackerSuccessProbability(0.1, 0);
AttackerSuccessProbability(0.1, 1);
AttackerSuccessProbability(0.3, 10);
AttackerSuccessProbability(0.3, 40);