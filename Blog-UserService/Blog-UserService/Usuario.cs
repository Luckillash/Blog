using System;
using System.Collections.Generic;

namespace Blog_UserService;

public partial class Usuario
{
    public long Id { get; set; }

    public string? PrimerNombre { get; set; }

    public string? SegundoNombre { get; set; }

    public string? PrimerApellido { get; set; }

    public string? SegundoApellido { get; set; }

    public string? NombreCompleto { get; set; }

    public string? Telefono { get; set; }

    public string? Correo { get; set; }

    public string? Pais { get; set; }

    public string? Region { get; set; }

    public string? Ciudad { get; set; }

    public string? Direccion { get; set; }

    public string? HashContraseña { get; set; }

    public DateTime? FechaRegistro { get; set; }

    public bool? CuentaActivada { get; set; }

    public string? TokenActivacion { get; set; }

    public DateTime? TokenActivacionExpiracion { get; set; }

    public string? TokenSesion { get; set; }

    public string? TokenSesionExpiracion { get; set; }

    public DateTime? UltimoAcceso { get; set; }

    public virtual ICollection<Post> Posts { get; set; } = new List<Post>();
}
