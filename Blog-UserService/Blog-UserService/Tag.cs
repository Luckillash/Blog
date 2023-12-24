using System;
using System.Collections.Generic;

namespace Blog_UserService;

public partial class Tag
{
    public long Id { get; set; }

    public string? Titulo { get; set; }

    public string? MetaTitulo { get; set; }

    public string? Slug { get; set; }

    public string? Contenido { get; set; }
}
