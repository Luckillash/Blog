using System;
using System.Collections.Generic;

namespace Blog_UserService;

public partial class Categoria
{
    public long Id { get; set; }

    public long? IdCategoriaPadre { get; set; }

    public string? Titulo { get; set; }

    public string? MetaTitulo { get; set; }

    public string? Slug { get; set; }

    public string? Contenido { get; set; }

    public virtual Categoria? IdCategoriaPadreNavigation { get; set; }

    public virtual ICollection<Categoria> InverseIdCategoriaPadreNavigation { get; set; } = new List<Categoria>();
}
