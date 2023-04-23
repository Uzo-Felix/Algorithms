#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

bool is_prime(int num, int primes[], int primes_len) {
    for (int i = 0; i < primes_len; i++) {
        if (num % primes[i] == 0) {
            return false;
        }
    }
    return true;
}

int* sum_primes(int num, int* primes_len) {
    int* primes = malloc(num * sizeof(int));
    *primes_len = 0;
    for (int i = 2; i <= num; i++) {
        if (is_prime(i, primes, *primes_len)) {
            primes[*primes_len] = i;
            (*primes_len)++;
        }
    }
    return primes;
}

int main() {
    int primes_len;
    int* primes = sum_primes(10, &primes_len);
    for (int i = 0; i < primes_len; i++) {
        printf("%d ", primes[i]);
    }
    free(primes);
    return 0;
}
