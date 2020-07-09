<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <span class="title">Exercise 3.4.10</span>
        <br />

        Prove that the set of matrices of the form
        $$
          \begin{pmatrix}
          1 & x & y \\
          0 & 1 & z \\
          0 & 0 & 1
          \end{pmatrix}
        $$
        <br/>
        is a group under matrix multiplication.


      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <span class="title">Solution</span>
        <br/>
        $$
          \begin{pmatrix}
            1 & x & y \\
            0 & 1 & z \\
            0 & 0 & 1
          \end{pmatrix}
          \begin{pmatrix}
            1 & x' & y' \\
            0 & 1 & z' \\
            0 & 0 & 1
          \end{pmatrix}
          =
          \begin{pmatrix}
            1 & x + x' & y + y' + xz' \\
            0 & 1 & z + z' \\
            0 & 0 & 1
          \end{pmatrix}
        $$
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        The neutral element must be the identity matrix. For associativity the hardest part is 
        to verify it in element \( (1, 3) \) that is, to verify the equality
        $$
          (y + y' + xz') + y'' + (x + x')z''
          =
          y + (y' + y'' + x'z'') + x(z' + z'')
        $$
        which is now suddenly easy. Finding the inverse resorts to system of equations
        $$
          \begin{align*}
            x + x' &= 0 \\
            y + y' + xz' &= 0 \\
            z + z' &= 0
          \end{align*}
        $$
        Must be \( y + y' -xz = 0 \) so \( y' = xz - y \) and the inverse is
        $$
          \begin{pmatrix}
            1 & -x & xz - y \\
            0 & 1 & -z \\
            0 & 0 & 1
          \end{pmatrix}
        $$
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: function() {
    return {
    }
  }
};
</script>
