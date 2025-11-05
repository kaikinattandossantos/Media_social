package com.example.demo.service;

public class CpfUtils {

    public static boolean isCPFValido(String cpf) {
        cpf = cpf.replaceAll("\\D", "");
        if (cpf.length() != 11 || cpf.matches("(\\d)\\1{10}")) return false;

        int soma1 = 0, soma2 = 0;
        for (int i = 0; i < 9; i++) {
            int num = cpf.charAt(i) - '0';
            soma1 += num * (10 - i);
            soma2 += num * (11 - i);
        }

        int dig1 = (soma1 * 10) % 11;
        dig1 = (dig1 == 10) ? 0 : dig1;
        soma2 += dig1 * 2;
        int dig2 = (soma2 * 10) % 11;
        dig2 = (dig2 == 10) ? 0 : dig2;

        return cpf.charAt(9) - '0' == dig1 && cpf.charAt(10) - '0' == dig2;
    }
}
