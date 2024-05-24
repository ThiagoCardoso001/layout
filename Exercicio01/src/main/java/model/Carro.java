package model;

public class Carro {
    private Acessorio acessorioOpcional;
    private ETipoCarro tipo;
    private ETipoModelo modelo;
    private double precoBase;
    private double IPI;

    public Carro(Acessorio acessorioOpcional, ETipoCarro tipo, ETipoModelo modelo, double precoBase, double IPI) {
        this.acessorioOpcional = acessorioOpcional;
        this.tipo = tipo;
        this.modelo = modelo;
        this.precoBase = precoBase;
        this.IPI = IPI;
    }

    public Carro() {
    }

    Carro carro = new Carro();
    public boolean verificaSeEhImportado() {
        if() {

        }

        else {

        }
    }

    public Acessorio getAcessorioOpcional() {
        return acessorioOpcional;
    }

    public void setAcessorioOpcional(Acessorio acessorioOpcional) {
        this.acessorioOpcional = acessorioOpcional;
    }

    public ETipoCarro getTipo() {
        return tipo;
    }

    public void setTipo(ETipoCarro tipo) {
        this.tipo = tipo;
    }

    public ETipoModelo getModelo() {
        return modelo;
    }

    public void setModelo(ETipoModelo modelo) {
        this.modelo = modelo;
    }

    public double getPrecoBase() {
        return precoBase;
    }

    public void setPrecoBase(double precoBase) {
        this.precoBase = precoBase;
    }

    public double getIPI() {
        return IPI;
    }

    public void setIPI(double IPI) {
        this.IPI = IPI;
    }
}
