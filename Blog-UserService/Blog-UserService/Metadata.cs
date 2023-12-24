using System;
using System.Collections.Generic;

namespace Blog_UserService;

public partial class Metadata
{
    public long Id { get; set; }

    public long? PostId { get; set; }

    public string? Llave { get; set; }

    public string? Contenido { get; set; }

    public virtual Post? Post { get; set; }
}
