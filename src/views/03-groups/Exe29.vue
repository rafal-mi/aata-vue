<template>
  <v-container>
    <v-row>
      <v-col>
        <span class="title">Exercise 3.4.29</span>
        <br>
        
        Prove Theorem 3.23: 
        <span class="theorem">
          In a group, the usual laws of exponents hold; that is, for all \( g, h \in G \),
          <ol>
            <li>
              \( g^m g^n = g^{m + n} \) for all \(m, n \in \mathbb{Z} \);
            </li>
            <li>
              \( (g^m)^n = g^{mn} \) for all \(m, n \in \mathbb{Z} \);
            </li>
            <li>
              \( (gh)^n = (h^{-1} g^{-1})^{-n} \) for all \(n \in \mathbb{Z} \); 
              Furthermore, if \( G \) is abelian, then \( (gh)^n = g^n h^n \). 
            </li>
          </ol>
        </span> 
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <span class="title">Solution</span>
        <br>
        For (1), if \( m, n \) are non-negative, 
        $$
          g^m g^n = \underbrace{g \boldsymbol{\cdot} \cdots \boldsymbol{\cdot} g}_{m~\text{times}}
                    \underbrace{g \boldsymbol{\cdot} \cdots \boldsymbol{\cdot} g}_{n~\text{times}}
                  = \underbrace{g \boldsymbol{\cdot} \cdots \boldsymbol{\cdot} g}_{m+n~\text{times}}
                  = g^{mn}
        $$
        and (1) holds. For negative component in first term, that is, \( m, n \ge 0 \) 
        $$
          g^{-m} g^n = \underbrace{g^{-1} \boldsymbol{\cdot} \cdots \boldsymbol{\cdot} g^{-1}}_{m~\text{times}}
                       \underbrace{g \boldsymbol{\cdot} \cdots \boldsymbol{\cdot} g}_{n~\text{times}}
        $$
        If \( m = n \) we are left with \( 1 \) and (1) holds.
        If \( m \lt n \) we are left with 
          \( \underbrace{g \boldsymbol{\cdot} \cdots \boldsymbol{\cdot} g}_{n-m~\text{times}}
          = g^{-m + n} \)
        and (1) holds.
        If \( m \gt n \) we are left with 
          \( \underbrace{g^{-1} \boldsymbol{\cdot} \cdots \boldsymbol{\cdot} g^{-1}}_{m-n~\text{times}}
          = g^{-m + n} \)
        and (1) holds. For negative component in second term the proof is identical.
        For negative exponents in both terms, that is, \( m, n \ge 0 \)
        $$
          g^{-m} g^{-n} = (g^{-1})^m(g^{-1})^n = (g^{-1})^{m + n} = g^{-m - n}
        $$
        and (1) holds.
        <br>
        Now we prove (2). For both \(m, n \) non-negative,
        $$
          (g^m)^n = \underbrace{g^m \boldsymbol{\cdot} \cdots \boldsymbol{\cdot} g^m}_{n~\text{times}}
                  = \underbrace{
                      \underbrace{g \boldsymbol{\cdot} \cdots \boldsymbol{\cdot} g}_{m~\text{times}}
                      \boldsymbol{\cdot} \cdots \boldsymbol{\cdot}
                      \underbrace{g \boldsymbol{\cdot} \cdots \boldsymbol{\cdot} g}_{m~\text{times}}
                    }_{n~\text{times}}
                  = \underbrace{g \boldsymbol{\cdot} \cdots \boldsymbol{\cdot} g}_{mn~\text{times}}
                  = g^{mn}
        $$
        For internal component negative that is, \( m, n \ge 0 \)
        $$
          (g^{-m})^n = ((g^{-1})^m)^n = (g^{-1})^{mn} = g^{-mn}
        $$
        and (2) holds.
        For external component negative that is, \( m, n \ge 0 \)
        $$
          (g^m)^{-n} = ((g^m)^{-1})^n \tag{*}
        $$
        we need one fact.
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div id="fact">
          <p>
          <b>FACT:</b>
          &nbsp;
          <i>\(g^m)^{-1} = g^{-m} \) for \( m \ge 0 \).</i>
          </p>
          <p>
          <i>Proof.</i>
          $$
            g^m g^{-m} = g^m (g^{-1})^m 
              = \underbrace{g \boldsymbol{\cdot} \cdots \boldsymbol{\cdot} g}_{m~\text{times}}
                \boldsymbol{\cdot}
                \underbrace{g^{-1} \boldsymbol{\cdot} \cdots \boldsymbol{\cdot} g^{-1}}_{m~\text{times}}
              = 1 \Box
          $$  
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        Now (*) becomes 
        $$ 
          (g^{-m})^n = ((g^{-1})^m)^n = (g^{-1})^{mn} = g^{-mn}
        $$
        and (2) holds.
        <br>
        Now we prove (3). Right is \( ((h^{-1}g^{-1})^{-1})^n = (gh)^n \) which is left fot non-negative \(n \).
        Recall the definition for negative exponent: \( g^{-n} = (g^{-1})^n \) for \( n \ge 0 \). 
        This formula also holds for \( n = -m \lt 0\): 
        $$
          g^{-n} = g^{-(-m)} = g^m = ((g^{-1})^{-1})^m = (g^{-1})^{-m} = (g^{-1})^m
        $$
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        Now
        $$
          (gh)^n = (gh)^{-m} = ((gh)^{-1})^m = (h^{-1} g^{-1})^m = (h^{-1} g^{-1})^m = (h^{-1} g^{-1})^{-n}
        $$
        Finally let \( G \) be abelian
        \begin{multline*}
          (gh)^n = \underbrace{gh \boldsymbol{\cdot} \cdots \boldsymbol{\cdot} gh}_{n~\text{times}}
                 = \underbrace{gh \boldsymbol{\cdot} \cdots \boldsymbol{\cdot} gh}_{n-1~\text{times}} \boldsymbol{\cdot} gh = \\
                 = \underbrace{gh \boldsymbol{\cdot} \cdots \boldsymbol{\cdot} gh}_{n-2~\text{times}} \boldsymbol{\cdot} ghgh
                 = \underbrace{gh \boldsymbol{\cdot} \cdots \boldsymbol{\cdot} gh}_{n-2~\text{times}} \boldsymbol{\cdot} g^2 h^2
                 = \ldots
                 = g^n h^n
        \end{multline*}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { runDelayed } from '@/lib/delayed'

export default {
  mounted() {
    console.log('Component Exe29 mounted');
    runDelayed();
  }
}
</script>

<style scoped>
.theorem {
  font-style: italic;
}

#fact {
  border-style: solid;
  border-width: 1px;
  border-color: darkgray;
  border-radius: 4px;
  padding: 8px;
  margin-right: 8px;
  word-spacing: 2px;
}

</style>
